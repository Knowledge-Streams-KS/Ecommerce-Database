const { Sequelize, Model, INTEGER, DataTypes } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

  },

  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: 'Cart'
  }
);

module.exports = Cart;
