'use strict'
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../config/constants')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					firstName: 'a',
					lastName: 'a',
					email: 'a@a.com',
					password: bcrypt.hashSync('a', SALT_ROUNDS),
					dateOfBirth: '2002-02-20',
					githubLink: 'a',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'b',
					lastName: 'b',
					email: 'b@b.com',
					password: bcrypt.hashSync('b', SALT_ROUNDS),
					dateOfBirth: '2002-02-20',
					githubLink: 'b',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Alex',
					lastName: 'Mode',
					email: 'alex@mode.com',
					password: bcrypt.hashSync('alexmode', SALT_ROUNDS),
					dateOfBirth: '1984-02-21',
					githubLink: 'http://github.com/team-cake',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users', null, {})
	},
}
