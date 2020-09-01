'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'dailymodes',
			[
				{
					mode: 1,
					comment: 'a',
					image: null,
					createdAt: '2020-08-30',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 1,
					comment: 'b',
					image: null,
					createdAt: '2020-08-30',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 1,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-08-30',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 2,
					comment: 'a',
					image: null,
					createdAt: '2020-08-31',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 2,
					comment: 'b',
					image: null,
					createdAt: '2020-08-31',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 2,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-08-31',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 3,
					comment: 'a',
					image: null,
					createdAt: '2020-09-01',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 3,
					comment: 'b',
					image: null,
					createdAt: '2020-09-01',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 3,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-01',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 4,
					comment: 'a',
					image: null,
					createdAt: '2020-09-02',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 4,
					comment: 'b',
					image: null,
					createdAt: '2020-09-02',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 4,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-02',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 5,
					comment: 'a',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 5,
					comment: 'b',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 5,
					comment: 'This is the way',
					image: null,
					createdAt: '2020-09-03',
					updatedAt: new Date(),
					userId: 3,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('dailymodes', null, {})
	},
}
