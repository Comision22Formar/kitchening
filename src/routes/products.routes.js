const express = require("express");
const {
  detail,
  add,
  edit,
  create,
  update,
  remove,
} = require("../controllers/productsController");
const upload = require("../middlewares/upload");
const productAddValidator = require("../../validations/product-add-validator");
const productEditValidator = require("../../validations/product-edit-validator");
const router = express.Router();

/* /productos */

router
  .get("/detalle/:id", detail)
  .get("/agregar", add)
  .post(
    "/crear",
    upload.fields([
      {
        name: "mainImage",
      },
      {
        name: "images",
      },
    ]),
    productAddValidator,
    create
  )
  .get("/editar/:id", edit)
  .put("/actualizar/:id",  upload.fields([
    {
      name: "mainImage",
    },
    {
      name: "images",
    },
  ]),productEditValidator, update)
  .delete("/eliminar/:id", remove);

module.exports = router;
