const boardRouter = require('express').Router();
const Board = require('../models').board;
const User=require('../models').user;

const getBoards = (req, res) => {
	User.findById(req.session.userId)
	.then((user) => {
		return user.getBoards()
	})
	.then((boards) => {
		res.send(boards)
	})
}

const getOneBoard = (req, res) => {
	Board.findById(req.params.id)
	.then((board) => {
		res.send(board)
	})
}

const createBoard = (req, res) => {
		var board = req.body
		board["userId"] = req.session.userId

		Board.create(board)
		.then((data) => {
		res.send("You've created a new board!")
		})
	
}

const deleteBoard = (req, res) => {
	Board.findById(req.params.id)
	.then((board) => {
		Board.destroy()
	})
	.then(() => {
		res.send('Board has been deleted.')
	})
}

boardRouter.route('/')
	.get(getBoards)
	.post(createBoard)


boardRouter.route('/:id')
	.get(getOneBoard)
	.delete(deleteBoard)


module.exports = boardRouter;