const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('street')
        .notEmpty().withMessage('La dirección es requerida'),
    check('url_map')
        .notEmpty().withMessage('La URL de Google Maps es obligatoria').bail()
        .isURL().withMessage('Debe ser un URL válida'),
    check('categoryId')
        .notEmpty().withMessage('La categoría es requerida'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min: 20,
            max: 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
]