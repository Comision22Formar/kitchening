const { leerJSON } = require("../data")

module.exports = {
    index : (req,res) => {
        const products = leerJSON('products');
        return res.render('index', {
            products
        })
    },
    cart : (req,res) => {
        return res.render('carrito')
    },
    admin : (req,res) => {
        const products = leerJSON('products');

        return res.render('dashboard', {
            products
        })
    },
    searchAdmin : (req,res) => {

        const {keyword} = req.query

        const products = leerJSON('products');

        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.toLowerCase()) || product.address.toLowerCase().includes(keyword.toLowerCase())
        });

        return res.render('dashboard', {
            products : result,
            keyword
        })
    }
}