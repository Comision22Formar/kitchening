const { leerJSON } = require("../data")

const db = require('../database/models')

module.exports = {
    index : (req,res) => {
        db.Restaurant.findAll({
            include : ['category']
        })
            .then(products => {
                //return res.send(products)
                return res.render('index', {
                    products
                })
            })
            .catch(error => console.log(error))
    },
    cart : (req,res) => {
        return res.render('carrito')
    },
    admin : (req,res) => {
        db.Restaurant.findAll()
            .then(products => {
                //return res.send(products)
                return res.render('dashboard', {
                    products
                })
            })
            .catch(error => console.log(error))
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