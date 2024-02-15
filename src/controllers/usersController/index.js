const User = require("../../data/User");
const { leerJSON, escribirJSON } = require("../../data");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");


const register = require('./register')
const processRegister = require('./processRegister')
const login = require('./login')
const processLogin = require('./processLogin')

module.exports = {
    register,
    processRegister,
    login,
    processLogin,
    logout : (req,res) => {
        
        req.session.destroy();
        res.cookie('kitchening4EV3R_user',null,{
            maxAge : -1
        })

        return res.redirect('/')
    },
    profile : (req,res) => {
        return res.render('users/profile')
    }
}