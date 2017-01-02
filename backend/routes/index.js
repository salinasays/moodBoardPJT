const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/boards', require('./boardRoutes.js'));
router.use('/login', require('./loginRoutes.js'));

module.exports = router; 