'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull : false

      },
      bookingId: {
        type: Sequelize.INTEGER,
                allowNull : false,
        references : {
          model : {
            tableName: "Bookings"
          }
        }
      },
      methodId: {
        type: Sequelize.INTEGER,
                allowNull : false,
        references : {
          model : {
            tableName: "Methods"
          }
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
                allowNull : false,
        references : {
          model : {
            tableName: "Statuses"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};