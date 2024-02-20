const db = require('../../database/models')

module.exports = (req,res) => {

    const {id} = req.params;

    const resto = db.Restaurant.findByPk(id,{
        include : ['images','category','address']
    })

    const bookings = db.Booking.findAll({
        where : {
            restaurantId : id
        },
        attributes : ['quantity']
    })

    Promise.all([resto, bookings])


        .then(([resto, bookings]) => {

            const total = bookings.map(booking => booking.quantity).reduce((acum, sum) => acum + sum, 0)

            const availability = resto.capacity - total
            
            return res.render('products/product-detail',{
                ...resto.dataValues,
                availability
            })
        })
        .catch(error => console.log(error))

  
}