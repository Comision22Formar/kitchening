const { getAllCategories } = require('../../services/category');


const getCategories = async (req,res) => {
    try {
      
      const categories = await getAllCategories()
        return res.status(200).json({
            ok : true,
            categories
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}


module.exports = {
   getCategories
}