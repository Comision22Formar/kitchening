const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

    const {id} = req.params;
    const products = leerJSON('products');

    const productsFiltered = products.filter(product => product.id != id);

    escribirJSON(productsFiltered, 'products');

    return res.redirect('/admin')


}