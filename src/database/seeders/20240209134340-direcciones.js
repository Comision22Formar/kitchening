"use strict";
const restarantsJSON = require('../../data/products.json')

const direccionesDB = restarantsJSON.map(() => {
  return {
    createdAt: new Date(),
    updatedAt: new Date(),

  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      direccionesDB,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
