const { Sequelize, Model, INTEGER, DataTypes, STRING } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER(),
    },

    firstName: {
     
      allowNull: false,
      type: DataTypes.STRING(),
    },
    lastName: {
    
      allowNull: false,
      type: DataTypes.STRING(),
    },

    userName: {
    
      allowNull: false,
      type: DataTypes.STRING(),
    },
    email: {
     
      allowNull: false,
      type: DataTypes.STRING(),
    },
    phoneNumber: {
     
      allowNull: false,
      type: DataTypes.STRING(),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    paranoid: true,
    timestamps: true,
    sequelize: sequelize,
    modelName: 'User'
  }
);

module.exports = User;
