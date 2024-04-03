const express = require('express');
const { getAllResto, getOneResto, createResto, getDataForEditResto } = require('../controllers/apis/restaurantsApiController');
const upload = require('../middlewares/upload');
const { checkEmail } = require('../controllers/apis/usersApiController');
const router = express.Router();

/* /apis */

router
  .get('/restaurants',getAllResto)
  .get('/restaurants/:id',getOneResto)
  .get('/restaurants/:id/edit',getDataForEditResto)
  .post('/restaurants',
  upload.fields([
    {
      name: "image",
    },
    {
      name: "images",
    },
    {
      name: "menu_file",
    },
  ]),
  createResto)
  .get('/users/check-email',checkEmail)


module.exports = router