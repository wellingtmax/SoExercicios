const express = require('express');
const router = express.Router();
const controler = require('../controller/authController');


router.post('/registro', controler.register);
router.post('/login', controler.login);

module.exports = router