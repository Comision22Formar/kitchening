"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statuses",
      [
        {
          name: "Pendiente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aprobado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rechazado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anulado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statuses", null, {});
  },
};
