'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'dailymodes',
			[
				{
					mode: 4,
					comment: 'This is fine',
					image: 'https://i.imgflip.com/3xwrwp.jpg',
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 4,
					comment: 'This is fine',
					image: 'https://i.imgflip.com/3xwrwp.jpg',
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 4,
					comment: 'This is fine',
					image: 'https://i.imgflip.com/3xwrwp.jpg',
					createdAt: '2020-09-06',
					updatedAt: new Date(),
					userId: 3,
				},

				{
					mode: 2,
					comment: 'Progress?',
					image: 'https://img.devrant.com/devrant/rant/r_1825530_6oF8Q.jpg',
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 2,
					comment: 'Progress?',
					image: 'https://img.devrant.com/devrant/rant/r_1825530_6oF8Q.jpg',
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 2,
					comment: 'Progress?',
					image: 'https://img.devrant.com/devrant/rant/r_1825530_6oF8Q.jpg',
					createdAt: '2020-09-07',
					updatedAt: new Date(),
					userId: 3,
				},

				{
					mode: 3,
					comment: 'Much coding, such hacker',
					image:
						'https://media.wired.com/photos/5cc244c9af643e2f373ebb28/1:1/w_1800,h_1800,c_limit/Coding-Becomes-Criminal.jpg',
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 3,
					comment: 'Much coding, such hacker',
					image:
						'https://media.wired.com/photos/5cc244c9af643e2f373ebb28/1:1/w_1800,h_1800,c_limit/Coding-Becomes-Criminal.jpg',
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 3,
					comment: 'Much coding, such hacker',
					image:
						'https://media.wired.com/photos/5cc244c9af643e2f373ebb28/1:1/w_1800,h_1800,c_limit/Coding-Becomes-Criminal.jpg',
					createdAt: '2020-09-08',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 2,
					comment: 'The force is strong with this one',
					image: 'https://miro.medium.com/max/1200/0*tmfbLDU_hIeg0B3B.jpg',
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 2,
					comment: 'The force is strong with this one',
					image: 'https://miro.medium.com/max/1200/0*tmfbLDU_hIeg0B3B.jpg',
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 2,
					comment: 'The force is strong with this one',
					image: 'https://miro.medium.com/max/1200/0*tmfbLDU_hIeg0B3B.jpg',
					createdAt: '2020-09-09',
					updatedAt: new Date(),
					userId: 3,
				},

				{
					mode: 1,
					comment: 'just chilling in the Matrix',
					image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
					createdAt: '2020-09-10',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 1,
					comment: 'just chilling in the Matrix',
					image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
					createdAt: '2020-09-10',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 1,
					comment: 'just chilling in the Matrix',
					image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
					createdAt: '2020-09-10',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 4,
					comment: 'With these powers combined',
					image: 'https://media.makeameme.org/created/git-merge.jpg',
					createdAt: '2020-09-11',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 4,
					comment: 'With these powers combined',
					image: 'https://media.makeameme.org/created/git-merge.jpg',
					createdAt: '2020-09-11',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 4,
					comment: 'With these powers combined',
					image: 'https://media.makeameme.org/created/git-merge.jpg',
					createdAt: '2020-09-11',
					updatedAt: new Date(),
					userId: 3,
				},
				{
					mode: 5,
					comment: 'I didnt choose the coding life, the coding life chose me.',
					image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
					createdAt: '2020-09-12',
					updatedAt: new Date(),
					userId: 1,
				},
				{
					mode: 5,
					comment: 'I didnt choose the coding life, the coding life chose me.',
					image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
					createdAt: '2020-09-12',
					updatedAt: new Date(),
					userId: 2,
				},
				{
					mode: 5,
					comment: 'I didnt choose the coding life, the coding life chose me.',
					image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
					createdAt: '2020-09-12',
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
