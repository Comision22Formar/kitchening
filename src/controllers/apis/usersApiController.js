const { getUserByEmail } = require("../../services/user")
const createError = require('http-errors')

const checkEmail = async (req,res) => {
    try {

        if(!req.query.email) throw createError(400, 'Se necesita un email')

        const user = await getUserByEmail(req.query.email)


        return res.status(200).json({
            ok : true,
            isRegisted : user ? true : false
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}



module.exports = {
    checkEmail
}