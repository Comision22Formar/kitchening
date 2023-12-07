const { leerJSON } = require("../../data");

module.exports = (req,res) => {

    const {id} = req.params;

    const products = leerJSON('products');

    const product = products.find(product => product.id == id);

    return res.render('products/product-edit',{
        ...product
    })
}