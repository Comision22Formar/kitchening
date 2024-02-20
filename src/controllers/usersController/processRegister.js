const { validationResult } = require("express-validator");
const db = require('../../database/models');
const {hashSync} = require('bcryptjs')

module.exports = processRegister = (req,res) => {
    const errors = validationResult(req);
    const {name, surname : lastname, email, password} = req.body;

    if(errors.isEmpty()){

        db.Address.create()
            .then(address => {
                db.User.create({
                    name,
                    lastname,
                    email,
                    password : hashSync(password.trim(),10),
                    roleId : 2,
                    addressId : address.id
                })
                    .then(user => {
                        console.log(user);
                        return res.redirect('/usuarios/ingreso')
                    })
            })
            .catch(error => console.log(error))            

    }else{
        return res.render('users/register',{
            old : req.body,
            errors : errors.mapped()
        })
    }
}