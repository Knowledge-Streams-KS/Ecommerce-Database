const bcrypt = require('bcrypt');
const cartModel = require("../models/cartModel")

module.exports = {
    createCart : async function(body){
        const data = await cartModel.createCart(body);
        return data;
},
    getCart : async function(body){
        const data = await cartModel.getCart();
        return data;
},
    getCartById : async function(ids){
        const data = await cartModel.getCartById(ids);
        return data;
},
updateCart : async function(body){
    const data = await cartModel.updateCart(body);
    return data;
},
removeCart : async function(id){
    const data = await cartModel.removeCart(id);
    return data;
},

};