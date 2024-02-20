"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });
      Restaurant.hasMany(models.Image, {
        as: 'images',
        foreignKey : 'restaurantId'
      });
      Restaurant.belongsTo(models.Address, {
        as : 'address',
        foreignKey : 'addressId'
      });
    }
  }
  Restaurant.init(
    {
      name: DataTypes.STRING,
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      coverPrice: { type: DataTypes.INTEGER, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      menu_file: { type: DataTypes.STRING, allowNull: true },
      menu_url: { type: DataTypes.STRING, allowNull: false },
      url_map: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: true },
      addressId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
