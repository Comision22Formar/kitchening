const createError = require('http-errors');
const paginate = require('express-paginate');
const db = require('../../database/models');
const { getAllCategories } = require('../../services/category');
const { storeResto, getResto, getRestoToEdit } = require('../../services/restaurant');
const { storeImages } = require('../../services/image');
const { storeAddress } = require('../../services/address');

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
            attributes : ['id', 'name'],
            limit : req.query.limit,
            offset : req.skip
        });

        const pagesCount = Math.ceil(count / req.query.limit);
        const currentPage = req.query.page;
        const pages = paginate.getArrayPages(req)(pagesCount, pagesCount,req.query.page); 

        const restaurants = rows.map(resto => {
            return {
                ...resto.dataValues,
                detail : `${req.protocol}://${req.get('host')}/apis/restaurants/${resto.id}`
            }
        })

        return res.status(200).json({
            ok : true,
            meta : {
                total : count,
                count : restaurants.length,
                pages,
                currentPage
            },
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
      
      const resto = await getResto(req.params.id, req)
        return res.status(200).json({
            ok : true,
            resto
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}

const getDataForEditResto = async (req,res) => {
    try {

        const resto = await getRestoToEdit(req.params.id, req)
        return res.status(200).json({
            ok : true,
            resto
        })
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error. Sorry!'
        })
    }
}

const createResto = async (req,res) =>{
    try {
        const {
            name,
            street,
            city,
            province,
            url_map,
            description,
            categoryId,
            coverPrice,
            phone,
            email,
            menu_url,
            capacity,
          } = req.body;

          if([name, description, phone, capacity, email, coverPrice].includes("" || undefined)) throw createError(400, "Los campos name, description, phone, capacity, email y coverPrice son obligatorios")
          
          if(!categoryId) throw createError(400, "Debe indicar el ID de la categoría")

          const categories = await getAllCategories();

          if(!categories.map(category => category.id).includes(+categoryId)) throw createError(400, "La categoría no existe")

          const image = req.files.image;
          const images = req.files.images;
          const menu_file = req.files.menu_file;
      
        const address = await storeAddress({
            street,
            city,
            province
        })

        const resto = await storeResto({
            name,
            description,
            coverPrice,
            image : image ? image[0].filename : null,
            menu_file : menu_file ? menu_file[0].filename : null,
            menu_url,
            url_map,
            phone,
            capacity,
            email,
            categoryId,
            addressId : address.id
        })

        const imageNames = images ? images.map(image => image.filename) : [];
 
        const imagesDB = imageNames.map(image => {
            return {
                file: image,
                restaurantId : resto.id
            }
        })

        if(imagesDB.length) await storeImages(imagesDB);

        const newResto = await getResto(resto.id, req)

        return res.status(200).json({
            ok : true,
            msg : "Resturant creado con éxito",
            resto : newResto
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
    getOneResto,
    getDataForEditResto,
    createResto
}