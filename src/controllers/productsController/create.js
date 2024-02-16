const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/Product");
const { validationResult } = require("express-validator");
const categories = require("../../data/categories.json");

const fs = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);
  
  const image = req.files.mainImage;
  const images = req.files.images;
  const menu_file = req.files.menu_file;

  if (errors.isEmpty()) {
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



    db.Address.create({
        street,
        city,
        province
    })
        .then(address => {
            db.Restaurant.create({
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
                .then(resto => {
                    console.log(resto);

                    this.images = images ? images.map(image => image.filename) : [];

                    if(images){

                        const imagesDB =  images.map(image => {
                            return {
                                file: image.filename,
                                restaurantId : resto.id
                            }
                        }) 

                        db.Image.bulkCreate(imagesDB, {
                            validate : true
                        }).then(result => {
                            console.log(result);
                            return res.redirect("/admin");
                        })
                    }else {
                        return res.redirect("/admin");
                    }
                })
        })
        .catch(error => console.log(error))


  } else {
    if ( image) {
      fs.existsSync(`public/images/${image[0].filename}`) &&
        fs.unlinkSync(`public/images/${image[0].filename}`);
    }
    if ( menu_file) {
        fs.existsSync(`public/documents/${menu_file[0].filename}`) &&
          fs.unlinkSync(`public/documents/${menu_file[0].filename}`);
      }
    return res.render("products/product-add", {
      errors: errors.mapped(),
      old: req.body,
      categories,
    });
  }
};
