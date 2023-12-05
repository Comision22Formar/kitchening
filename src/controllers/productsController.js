const { leerJSON } = require("../data");

module.exports = {
    add : (req,res) => {
        return res.render('products/product-add')
    },
    detail : (req,res) => {

        const {id} = req.params;

        const products = leerJSON('products');

        const product = products.find(product => product.id === +id);

        return res.render('products/product-detail',{
            ...product
        })
    },
    edit : (req,res) => {
        return res.render('products/product-edit')
    },
    search : (req,res) => {

    }

}