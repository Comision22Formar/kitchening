const express = require('express');
const { login, register, processLogin, processRegister, logout, profile } = require('../controllers/usersController');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkAuthUser = require('../middlewares/checkAuthUser');
const router = express.Router();

/* /usuarios */
router
  .get('/ingreso',checkAuthUser, login)
  .get('/registro',checkAuthUser, register)
  .post('/ingreso', userLoginValidator, processLogin)
  .post('/registro', userRegisterValidator, processRegister)
  .get('/salir',logout)
  .get('/perfil',checkUserLogin, profile)

module.exports = router;