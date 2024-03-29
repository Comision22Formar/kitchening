"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Barato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Romántico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sofisticado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
