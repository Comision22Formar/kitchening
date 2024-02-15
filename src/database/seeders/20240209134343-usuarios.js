"use strict";
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          lastname: "Kitchening",
          email: "admin@gmail.com",
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          roleId : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          lastname: "Kitchening",
          email: "user@gmail.com",
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          roleId : 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
