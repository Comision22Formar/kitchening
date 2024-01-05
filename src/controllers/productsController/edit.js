const { leerJSON } = require("../../data");
const categories = require('../../data/categories.json')

module.exports = (req,res) => {

    const {id} = req.params;

    const products = leerJSON('products');

    const product = products.find(product => product.id == id);

    return res.render('products/product-edit',{
        ...product,
        categories
    })
}