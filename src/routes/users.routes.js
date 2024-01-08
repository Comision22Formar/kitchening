const express = require('express');
const { login, register, processLogin, processRegister } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const router = express.Router();

/* /usuarios */
router
  .get('/ingreso',login)
  .get('/registro',register)
  .post('/ingreso',userLoginValidator, processLogin)
  .post('/registro',userRegisterValidator, processRegister)

module.exports = router;