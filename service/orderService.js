const bcrypt = require('bcrypt');
const orderModel = require("../models/orderModel")

module.exports = {
    createOrder : async function(body){
        const data = await orderModel.createOrder(body);
        return data;
},
    getOrder : async function(body){
        const data = await orderModel.getOrder();
        return data;
},
    getOrderById : async function(ids){
        const data = await orderModel.getOrderById(ids);
        return data;
},
updateOrder : async function(body){
    const data = await orderModel.updateOrder(body);
    return data;
},
removeOrder : async function(id){
    const data = await orderModel.removeOrder(id);
    return data;
},

};