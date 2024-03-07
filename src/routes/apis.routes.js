const express = require('express');
const { getAllResto, getOneResto, createResto } = require('../controllers/apis/restaurantsApiController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /apis */

router
  .get('/restaurants',getAllResto)
  .get('/restaurants/:id',getOneResto)
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


module.exports = router