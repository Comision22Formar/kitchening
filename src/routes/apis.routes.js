const express = require('express');
const { getAllResto, getOneResto } = require('../controllers/apis/restaurantsApiController');
const router = express.Router();

/* /apis */

router
  .get('/restaurants',getAllResto)
  .get('/restaurants/:id',getOneResto)


module.exports = router