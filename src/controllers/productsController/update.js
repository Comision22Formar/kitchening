const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const categories = require("../../data/categories.json");
const db = require("../../database/models");

module.exports = (req, res) => {
  const image = req.files.mainImage;
  const images = req.files.images;
  const menu_file = req.files.menu_file;

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

  const { id } = req.params;

  const errors = validationResult(req);

  //return res.send(errors)

  if (errors.isEmpty()) {
    db.Restaurant.findByPk(id,{
        include : ['images']
    }).then((resto) => {
      db.Address.update(
        {
          street,
          city,
          province,
        },
        {
          where: {
            id: resto.addressId,
          },
        }
      ).then(() => {
        if(image){
          existsSync("public/images/" + resto.image) &&
          unlinkSync("public/images/" + resto.image) 
        }
        if(menu_file) {
          existsSync("public/documents/" + resto.menu_file) &&
          unlinkSync("public/documents/" + resto.menu_file)
        }

        db.Restaurant.update(
          {
            name,
            description,
            url_map,
            phone,
            email,
            menu_url,
            capacity,
            coverPrice,
            categoryId,
            image: image ? image[0].filename : resto.image,
            menu_file: menu_file ? menu_file[0].filename : resto.menu_file,
          },
          {
            where: {
              id,
            },
          }
        ).then(() => {
            if (images) {
                resto.images.forEach((image) => {
                  existsSync("public/images/" + image.file) &&
                    unlinkSync("public/images/" + image.file);
                });

                db.Image.destroy({
                    where : {
                        restaurantId : id
                    }
                  }).then(() => {
                    const imagesDB = images.map(image => {
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
                  })
                }else {
                  return res.redirect("/admin");

                }       
        });
      });
    }).catch(error => console.log(error));

  } else {
    image &&
      existsSync("public/images/" + image.filename) &&
      unlinkSync("public/images/" + image.filename);

    if (images) {
      images.forEach((image) => {
        existsSync("public/images/" + image) &&
          unlinkSync("public/images/" + image);
      });
    }
    if (menu_file) {
      fs.existsSync(`public/documents/${menu_file[0].filename}`) &&
        fs.unlinkSync(`public/documents/${menu_file[0].filename}`);
    }

    const resto = db.Restaurant.findByPk(id, {
        include : ['category','address']
    })
    const categories = db.Category.findAll({
        order: [['name']]
    })
        Promise.all([resto, categories])
        .then(([resto, categories]) => {

            return res.render('products/product-edit',{
                ...resto.dataValues,
                categories,
                errors : errors.mapped()
            })
        })
        .catch(error => console.log(error))

  }
};
