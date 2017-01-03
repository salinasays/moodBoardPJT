const loginRouter=require('express').Router();
const User=require('../models').user 
const session=require('express-session');

const signIn = (req, res) => {
	console.log('Session', req.session)

	var userInfo = req.body;


	User.findOne({
		where: {
			email: userInfo.email,
			password: userInfo.password
		}
	})
	.then((user) => {
		if(user) {
			console.log("Password is correct!")

			req.session.email = user.email;
			req.session.userId = user.id;
			req.session.save();
			console.log("Updated Session?", req.session);

			res.send(user.email);
			
		} else {
			res.status(401).send("The login is incorrect. Please try again.")
		} 
	})

};

loginRouter.route('/')
	.post(signIn)

module.exports=loginRouter;