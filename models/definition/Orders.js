const { Sequelize, Model, INTEGER, DataTypes } = require ('sequelize');

let sequelize = require("../../common/dbConnection");

class Orders extends Model {}

Orders.init(
    {
        id:{
            primaryKey : true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER(),
        },
        
        quantity:{
            allowNull: false,
        type: DataTypes.INTEGER(),
    },
    price:{
        allowNull: false,
        type: DataTypes.FLOAT(),
    },
    total:{
        allowNull: false,
        type: DataTypes.FLOAT(),
    },
},
    {
    
        paranoid: true,
        timestamps: true,
        sequelize: sequelize,
        modelName: 'Orders'
    }   
    
);

module.exports = ("Orders");