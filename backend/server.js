var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var db = require('./models')
const Sequelize=require('sequelize');
const session=require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
	secret: 'whose line is it anyway?',
	resave: false,
	saveUninitialized: false,
}))

app.listen('3000', () => console.log('Listening on port 3000'));

app.get('/auth', (req, res) => {
	console.log(req.session);
	if(req.session.email) {
		res.send(req.session.email);
	} else {
		res.send(null)
	}
});

db.sequelize.sync().then(() => {
	app.use('/api', require('./routes'))
	app.use('/login', require('./routes/loginRoutes'))
	app.get('/*', (req, res) => {
  		res.sendFile(path.join(__dirname, '../frontend/index.html'));
	});	
})
