const userRouter = require('express').Router();
const User = require('../models').user;
const Board = require('../models').board;

const getUsers = (req, res) => {
	User.findAll()
	.then((users) => {
		res.send(users)
	})
}

const getOneUser = (req, res) => {
	User.findById(req.session.userId)
	.then((user) => {
		res.send(user)
	}) 
}

const createUser = (req, res) => {
	User.create(req.body)
	.then((data) => {
		res.send(data)
	})
}

const deleteUser = (req, res) => {
	User.findById(req.params.id)
	.then((user) => {
		user.destroy()
	})
	.then (() => {
		res.send('User has been deleted.')
	})
}

const userCreatesBoard = (req, res) => {
	User.findById(req.params.id)
	.then(() => {
		Board.create(req.body)
	})
	.then((board) => {
		res.send(board)
	})
}

const getUsersBoards = (req, res) => {
	User.findById(req.params.id)
	.then(() => {
		Board.findAll()
	})
	.then((boards) => {
		res.send(boards)
	})
}

userRouter.route('/')
	.get(getUsers)
	.post(createUser)

userRouter.route('/id')
	.get(getOneUser)
	.delete(deleteUser)

userRouter.route('/:id/boards')
	.get(getUsersBoards)
	.post(userCreatesBoard)

module.exports = userRouter;