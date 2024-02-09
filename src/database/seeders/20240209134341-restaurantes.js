"use strict";
const restarantsJSON = require('../../data/products.json')

const restuarntsDB = restarantsJSON.map((resto, index) => {
  return {
    name : resto.name,
    description : resto.description,
    coverPrice : 1000,
    phone: "(011)3401-6800",
    capacity : 100,
    email : "resto@gmail.com",
    image : resto.mainImage,
    categoryId: resto.category == "barato" ? 1 : resto.category == "romantico" ? 2 : 3,
    createdAt: new Date(),
    updatedAt: new Date(),

  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
   restuarntsDB,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurants", null, {});
  },
};
