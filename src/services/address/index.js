const createError = require('http-errors')
const db = require('../../database/models')

const storeAddress = async (data) => {

    const {street, city, province} = data

    try {
        const newAddress = await db.Address.create({
            street,
            city,
            province
        })
    
        return newAddress
        
    } catch (error) {
        return createError(500, error.message)
    }
}

module.exports = {
    storeAddress
}