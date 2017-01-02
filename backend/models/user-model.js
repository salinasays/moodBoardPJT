 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var User = sequelize.define("user", {
 		email: {
 			type: DataTypes.STRING,
 			required: true,
 			isEmail: true
 		},
 		firstName: {
 			type: DataTypes.STRING,
 			required: true
 		},
 		lastName: {
 			type: DataTypes.STRING,
 			required: true
 		},
   	 	password: {
 			type: DataTypes.STRING,
 			required: true,
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