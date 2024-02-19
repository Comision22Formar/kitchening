"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Methods",
      [
        {
          name: "Efectivo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarjeta de Débito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tarjeta de Crédito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mercado Pago",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Methods", null, {});
  },
};
