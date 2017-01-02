 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var User = sequelize.define("user", {
 		email: {
 			type: DataTypes.STRING,
 			allowNull: false,
 			isEmail: true
 		},
 		firstName: {
 			type: DataTypes.STRING,
 			allowNull: false
 		},
 		lastName: {
 			type: DataTypes.STRING,
 			allowNull: false
 		},
   	 	password: {
 			type: DataTypes.STRING,
 			allowNull: false,
 			len: [5, 15]
 		}

 	}, {
 		classMethods: {
 			associate: function(models){
 				User.hasMany(models.board)
 			}
 		}
 	})
 	return User;
 }