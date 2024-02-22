const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;

  db.Restaurant.findByPk(id, {
    include: ["images", "category", "address"],
  })
    .then((resto) => {
      db.Restaurant.findAll({
        where: {
          categoryId: resto.categoryId,
        },
        include: ["images", "category", "address"],
      }).then((relateds) => {
        return res.render("products/product-detail", {
          ...resto.dataValues,
          relateds,
        });
      });
    })
    .catch((error) => console.log(error));
};
