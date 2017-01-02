 "use strict";

 module.exports = function(sequelize, DataTypes){
 	var Board = sequelize.define("board", {
 		title: {
 			type: DataTypes.STRING,
 			required: true,
 		},
    images: {
 			type: DataTypes.ARRAY(DataTypes.STRING)
 		}

 	}, {
 		classMethods: {
 			associate: function(models){
 				Board.belongsTo(models.user)
 			}
 		}
 	})
 	return Board;
 }
