const express = require('express');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /productos */

router
  .get('/detalle/:id', detail)
  .get('/agregar',add)
  .post('/crear',upload.single('mainImage'), create)
  .get('/editar/:id',edit)
  .put('/actualizar/:id',upload.single('mainImage'),update)
  .delete('/eliminar/:id',remove)

module.exports = router;