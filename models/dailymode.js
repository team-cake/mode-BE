'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class dailymode extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			dailymode.belongsTo(models.user)
		}
	}
	dailymode.init(
		{
			mode: { type: DataTypes.INTEGER, allowNull: false },
			comment: DataTypes.STRING,
			image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'dailymode',
		}
	)
	return dailymode
}
