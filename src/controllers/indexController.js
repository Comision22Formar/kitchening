const { Op } = require("sequelize")
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
        db.Restaurant.findAll({
            include : ['address','category']
        })
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

        db.Restaurant.findAll({
            where : {
                name : {
                    [Op.substring] : keyword
                }
            },
            include : ['address','category']
        })
            .then(result => {
                return res.render('dashboard', {
                    products : result,
                    keyword
                })
            })
            .catch(error => console.log(error))

     

      
    }
}