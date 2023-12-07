const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");

module.exports = (req,res) => {
    const {name, address,url_map, description, category} = req.body;

    const newProduct = new Product(name, address, url_map, description, category)
    const products = leerJSON('products');

    products.push(newProduct);

    escribirJSON(products, 'products')

    return res.redirect('/admin')

}