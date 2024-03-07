const createError = require('http-errors')
const db = require('../../database/models')


const getAllCategories = async () => {
    try {
        const categories = await db.Category.findAll()
        return categories
        
    } catch (error) {
        return createError(500, error.message)
    }
}


module.exports = {
    getAllCategories
}
