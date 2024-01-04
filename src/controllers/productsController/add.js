const categories = require('../../data/categories.json')

module.exports = (req,res) => {
    return res.render('products/product-add',{
        categories
    })
}