const createError = require('http-errors')
const db = require('../../database/models')

const getUserByEmail = async (email) => {
    try {

        const user = await db.User.findOne({
            where : {
                email
            }
        })
        
        return user
        
    } catch (error) {
        return createError(500, error.message)
    }
}


module.exports = {
    getUserByEmail
}