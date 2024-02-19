const db = require('../../database/models')

module.exports = (req,res) => {

    const {id} = req.params;

    const resto = db.Restaurant.findByPk(id, {
        include : ['category','address']
    })
    const categories = db.Category.findAll({
        order: [['name']]
    })
        Promise.all([resto, categories])
        .then(([resto, categories]) => {
            return res.render('products/product-edit',{
                ...resto.dataValues,
                categories
            })
        })
        .catch(error => console.log(error))




}