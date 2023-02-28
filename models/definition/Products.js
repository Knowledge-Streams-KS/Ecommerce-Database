const { Sequelize, Model, INTEGER, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Products extends Model {}

Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

    title: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING(),
    },
    category: {
    unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE(),
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    url: {
      type: DataTypes.STRING(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize:sequelize,
    modelName: 'Products'
  }
);

module.exports = Products;
