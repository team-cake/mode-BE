const bcrypt = require('bcrypt')
const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const authMiddleware = require('../auth/middleware')
const User = require('../models/').user
const Dailymode = require('../models').dailymode
const { SALT_ROUNDS } = require('../config/constants')

const router = new Router()

router.post('/login', async (req, res, next) => {
	try {
		const { email, password } = req.body

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: 'Please provide both email and password' })
		}

		const user = await User.findOne({
			where: { email },
			include: { model: Dailymode },
		})

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(400).send({
				message: 'User with that email not found or password incorrect',
			})
		}

		delete user.dataValues['password'] // don't send back the password hash
		const token = toJWT({
			userId: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			dateOfBirth: user.dateOfBirth,
			githubLink: user.githubLink,
		})
		return res.status(200).send({ token, ...user.dataValues })
	} catch (error) {
		console.log(error)
		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

router.post('/signup', async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		dateOfBirth,
		githubLink,
	} = req.body
	if (!firstName || !lastName || !email || !password || !dateOfBirth) {
		return res
			.status(400)
			.send(
				'Please provide required information: first name, last name, email, password, and date of birth.'
			)
	}

	try {
		const newUser = await User.create({
			firstName,
			lastName,
			email,
			password: bcrypt.hashSync(password, SALT_ROUNDS),
			dateOfBirth,
			githubLink,
		})

		delete newUser.dataValues['password'] // don't send back the password hash

		const token = toJWT({
			id: newUser.id,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			email: newUser.email,
			dateOfBirth: newUser.dateOfBirth,
			githubLink: newUser.githubLink,
		})

		res.status(201).json({ token, ...newUser.dataValues })
	} catch (error) {
		if (error.name === 'SequelizeUniqueConstraintError') {
			return res
				.status(400)
				.send({ message: 'There is an existing account with this email' })
		}

		return res.status(400).send({ message: 'Something went wrong, sorry' })
	}
})

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get('/me', authMiddleware, async (req, res) => {
	// don't send back the password hash
	const dailyMode = await Dailymode.findOne({
		where: { id: req.user.id },
		include: [Dailymode],
	})
	delete req.user.dataValues['password']
	res.status(200).send({ ...req.user.dataValues, dailyMode })
})

module.exports = router
