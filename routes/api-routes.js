let router = require('express').Router();
let express = require('express');

let AccountController = require('../src/Controller/AccountController');

//param user,pass
router.route('/VerifyAuth').post(AccountController.VerifyLogin);

module.exports = router;