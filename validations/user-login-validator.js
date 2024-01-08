const { check, body } = require("express-validator");
const {compareSync} = require('bcryptjs')
const { leerJSON } = require("../src/data");


module.exports = [
    check("email")
        .notEmpty().withMessage('El email es obligatorio'),
    body("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value, {req}) => {
            const users = leerJSON('users');
            const user = users.find(user => user.email === req.body.email.trim())

            if(!user || !compareSync(value.trim(), user.password) ) {
                return false
            }

            return true
        }).withMessage('Credenciales inválidas')

]