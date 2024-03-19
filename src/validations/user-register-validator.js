const { check, body } = require("express-validator");

const db = require('../database/models')
module.exports = [
    check("name")
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    check("surname")
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2
        }).withMessage("Mínimo dos caracteres").bail()
        .isAlpha('es-ES',{ignore: ' '}).withMessage('Solo caracteres alfabéticos'),
    body("email")
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('El email tiene un formato inválido').bail()
        .custom((value, {req}) => {
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user) {
                    return Promise.reject()
                }
            }).catch(error => {
                return Promise.reject("El email ya se encuentra regisrado")
            })          
        }),
    check("password")
        .notEmpty().withMessage("La contraseña es obligatoria")
        .isLength({
            min: 6,
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    body("password2")
        .notEmpty().withMessage("Debe verificar la contraseña")
        .custom((value, {req}) => {
            if(value != req.body.password){
                return false
            }
            return true
        }).withMessage("Las contraseñas no coinciden"),
    check("remember")
        .notEmpty().withMessage("Debes aceptar los términos y condiciones")

]