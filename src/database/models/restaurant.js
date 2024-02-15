'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      })
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    coverPrice: DataTypes.INTEGER,
    image: DataTypes.STRING,
    menu_file: DataTypes.STRING,
    menu_url: DataTypes.STRING,
    url_map: DataTypes.STRING,
    phone: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    email: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};