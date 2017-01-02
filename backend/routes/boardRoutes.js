const boardRouter = require('express').Router();
const Board = require('../models/board-model.js');

const getBoards = (req, res) => {
	Board.findAll()
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
	Board.create({
		title: req.body.title
	})
	.then((board) => {
		res.send(board)
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