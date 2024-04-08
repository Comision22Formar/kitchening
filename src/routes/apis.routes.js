const express = require('express');
const { getAllResto, getOneResto, createResto, getDataForEditResto, updateResto, deleteResto } = require('../controllers/apis/restaurantsApiController');
const upload = require('../middlewares/upload');
const { checkEmail } = require('../controllers/apis/usersApiController');
const { getCategories } = require('../controllers/apis/categoriesApiControlller');
const router = express.Router();

/* /apis */

router
//categorias
  .get('/categories', getCategories)
//restaurantes
  .get('/restaurants',getAllResto)
  .get('/restaurants/:id',getOneResto)
  .get('/restaurants/:id/edit',getDataForEditResto)
  .post('/restaurants', createResto)
  .put('/restaurants',updateResto)
  .delete('/restaurants/:id',deleteResto)
  //usuarios
  .get('/users/check-email',checkEmail)


module.exports = router