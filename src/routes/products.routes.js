const express = require('express');
const { detail } = require('../controllers/productsController');
const router = express.Router();

/* /productos */

router
  .get('/detalle/:id?', detail)

module.exports = router;