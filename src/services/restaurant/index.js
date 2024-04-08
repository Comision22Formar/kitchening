const createError = require('http-errors')
const db = require('../../database/models')


const storeResto = async (data) => {

    try {

        const {name, description, coverPrice, image, menu_file, menu_url, url_map, phone, capacity, email, categoryId, addressId} = data

        const newResto = await db.Restaurant.create({
            name,
            description,
            coverPrice,
            image,
            menu_file,
            menu_url,
            url_map,
            phone,
            capacity,
            email,
            categoryId,
            addressId        
        })

        return newResto
        
    } catch (error) {
        return createError(500, error.message)
    }
   
}

const updateRestoService = async (data) => {

    try {

        const {name, description, coverPrice, menu_url, url_map, phone, capacity, email, categoryId, id} = data

        await db.Restaurant.update(
            {
                name,
                description,
                coverPrice,
                menu_url,
                url_map,
                phone,
                capacity,
                email,
                categoryId,
            },
            {
                where : {
                    id
                }

        })

        
    } catch (error) {
        return createError(500, error.message)
    }
   
}

const getResto = async (id, req) => {
    try {
        const resto = await db.Restaurant.findByPk(id,{
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
            categoryName : resto.category.name,
            addressCompleted : `${resto.address.street} ${resto.address.city}, ${resto.address.province}`
        }

        return restoCustom
        
    } catch (error) {
    
        return createError(500, error.message)
    }
}

const getRestoToEdit = async (id, req) => {
    try {
        const resto = await db.Restaurant.findByPk(id,{
            include : [
                {
                    association : 'images',
                    attributes : ['file','id']
                },
                {
                    association : 'address',
                    attributes : ['street', 'city', 'province']
                }
            ],
            attributes :{
                exclude : ['createdAt', 'updatedAt']
            }
        })

        const restoCustom = {
            ...resto.dataValues,
            image : `${req.protocol}://${req.get('host')}/images/${resto.image}`,
            street : resto.address.street,
            city : resto.address.city,
            province : resto.address.province,
        }

        return restoCustom
        
    } catch (error) {
    
        return createError(500, error.message)
    }
}

const deleteRestoService = async (id) => {
    try {

        const resto = await db.Restaurant.findByPk(id);
      
        await db.Address.destroy({
            where : {
                id : resto.addressId
            }
        })

        await db.Restaurant.destroy({
            where : {
                id
            }
        })
        
    } catch (error) {
    
        return createError(500, error.message)
    }
}


module.exports = {
    storeResto,
    getResto,
    getRestoToEdit,
    updateRestoService,
    deleteRestoService
}