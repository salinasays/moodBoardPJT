module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.changeColumn(
			'users',
			'lastName',
			{
				type: Sequelize.STRING,
				allowNull: false			
			}
		)
	}	
}