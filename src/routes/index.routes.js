const express = require('express');
const { index, cart, admin, searchAdmin } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');
const router = express.Router();

/* / */

router
  .get('/',index)
  .get('/carrito',cart)
  .get('/admin',checkAdmin, admin)
  .get('/admin/productos/buscar',checkAdmin, searchAdmin)


module.exports = router