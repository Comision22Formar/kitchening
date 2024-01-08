const { validationResult } = require("express-validator");
const User = require("../data/User");
const { leerJSON, escribirJSON } = require("../data");

module.exports = {
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);
        const {name, surname, email, password} = req.body;

        if(errors.isEmpty()){

            const users = leerJSON('users');
            const newUser = new User(name, surname, email, password);
            users.push(newUser);

            escribirJSON(users, 'users')

            return res.redirect('/usuarios/ingreso')
            

        }else{
            return res.render('users/register',{
                old : req.body,
                errors : errors.mapped()
            })
        }

    },
    login : (req,res) => {
        return res.render('users/login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);
        const {email} = req.body;

        if(errors.isEmpty()){


        }else {
            return res.render('users/login',{
                errors : errors.mapped()
            })
        }
    },
}