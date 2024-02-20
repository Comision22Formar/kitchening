const { existsSync, unlinkSync } = require("fs");

const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;

  db.Restaurant.findByPk(id, {
    include: ["images", "address"],
  }).then(({ image, images, menu_file, addressId }) => {

    existsSync(`public/documents/${menu_file}`) &&
    unlinkSync(`public/documents/${menu_file}`);

    existsSync("public/images/" + image) &&
      unlinkSync("public/images/" + image);

    images.forEach((image) => {
      existsSync("public/images/" + image.file) &&
        unlinkSync("public/images/" + image.file);
    });

    db.Image.destroy({
        where : {
            restaurantId : id
        }
    }).then(() => {

        db.Restaurant.destroy({
            where : {
                id
            }
        }).then(() => {
            db.Address.destroy({
                where : {
                    id : addressId
                }
            }) .then(() => {
                return res.redirect('/admin')
            })
        }) 
    })

  })
    .catch(error => console.log(error))


};
