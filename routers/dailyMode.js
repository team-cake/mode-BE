const { Router } = require('express')
const Dailymode = require('../models').dailymode
const User = require('../models').user
const auth = require('../auth/middleware')

const router = new Router()

router.get('/dailymode', async (req, res) => {
	const limit = req.query.limit || 10
	const offset = req.query.offset || 0
	const dailymode = await Dailymode.findAndCountAll({
		limit,
		offset,
		// include: [User],
	})
	res.status(200).send(dailymode)
})

router.get('/dailymode/:id', async (req, res) => {
	const { id } = req.params

	console.log(id)
	if (isNaN(parseInt(id))) {
		return res.status(400).send({ message: 'DailymodeId is not a number' })
	}

	const mode = await Dailymode.findByPk(
		id
		// 	{
		// 	include: [User],
		// }
	)

	if (mode === null) {
		return res.status(404).send({ message: 'Dailymode not found' })
	}

	res.status(200).send(mode)
})

router.get('/user/:id/dailymode', async (req, res) => {
	const { id } = req.params
	const limit = req.query.limit || 10
	const offset = req.query.offset || 0
	console.log(id)
	if (isNaN(parseInt(id))) {
		return res.status(400).send({ message: 'userId is not a number' })
	}

	const mode = await User.findByPk(
		id,
		// mood,
		// comment,
		// image,
		// limit,
		// offset,
		{ include: [Dailymode] }
	)

	if (mode === null) {
		return res.status(404).send({ message: 'Dailymode not found' })
	}

	res.status(200).send(mode)
})

router.post('/dailymode', async (req, res) => {
	const { mode, comment, image, userId } = req.body

	if (!mode) {
		return res.status(400).send({ message: 'A dailymode must have a mode.' })
	}

	const newMode = await Dailymode.create({
		mode,
		comment,
		image,
		userId,
	})

	return res.status(201).send({ message: 'Dailymode created', newMode })
})

router.patch('/dailymode/:id', auth, async (req, res) => {
	const updateMode = await Dailymode.findByPk(req.params.id)
	if (!dailymode.userId === req.user.id) {
		return res
			.status(403)
			.send({ message: 'You are not authorized to update this mode' })
	}

	const { mode, comment, image } = req.body

	await updateMode.update({ mode, comment, image })

	return res.status(200).send({ updateMode })
})

router.delete('/dailymode/:Id', auth, async (req, res, next) => {
	try {
		const dailymodeId = parseInt(req.params.Id)
		const dailyMode = await Dailymode.findByPk(dailymodeId)
		if (!dailyMode) {
			res.status(404).send('Dailymode not found')
		} else {
			tip.destroy()
		}
	} catch (e) {
		next(e)
	}
	return res.status(200).send('Dailymode deleted')
})

module.exports = router
