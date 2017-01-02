const userRouter = require('express').Router();
const User = require('../models').user 

const getUsers = (req, res) => {
	User.findAll()
	.then((users) => {
		res.send(users)
	})
}

const getOneUser = (req, res) => {
	User.findById(req.params.id)
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

userRouter.route('/')
	.get(getUsers)
	.post(createUser)

userRouter.route('/:id')
	.get(getOneUser)
	.delete(deleteUser)


module.exports = userRouter;