const db = require('../../database/models');


const getAllResto = async (req,res) => {
    try {
        const { count, rows } =  await db.Restaurant.findAndCountAll({
            include : [
                {
                    association : 'category',
                    attributes : ['name']
                },
                {
                    association : 'address',
                    attributes : ['street', 'city', 'province']

                }
            ],
            attributes : ['id', 'name']
        })

        const restaurants = rows.map(resto => {
            return {
                ...resto.dataValues,
                detail : `${req.protocol}://${req.get('host')}/apis/restaurants/${resto.id}`
            }
        })

        return res.status(200).json({
            ok : true,
            count,
            restaurants
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}


const getOneResto = async (req,res) => {
    try {
        const resto = await db.Restaurant.findByPk(req.params.id,{
            include : [
                {
                    association : 'category',
                    attributes : ['name']
                },
                {
                    association : 'address',
                    attributes : ['street', 'city', 'province']
                },
                {
                    association : 'images',
                    attributes : ['file']
                }
            ],
            attributes :{
                exclude : ['categoryId', 'addressId', 'createdAt', 'updatedAt']
            }
        })

        const restoCustom = {
            ...resto.dataValues,
            image : `${req.protocol}://${req.get('host')}/images/${resto.image}`,
            category : resto.category.name,
            address : `${resto.address.street} ${resto.address.city}, ${resto.address.province}`
        }

        return res.status(200).json({
            ok : true,
            resto : restoCustom
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}


module.exports = {
    getAllResto,
    getOneResto
}