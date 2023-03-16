const bcrypt = require('bcrypt');
const productModel = require("../models/productModel")

module.exports = {
    createProduct : async function(body){
        const data = await productModel.createProduct(body);
        return data;
},
createProductBulk: async function (body) {
    const data = await productModel.createProductBulk(body);
    return body.products;
},
    getProduct : async function(body){
        const data = await productModel.getProduct();
        return data;
},
    getProductById : async function(ids){
        const data = await productModel.getProductById(ids);
        return data;
},
getCategory: async function () {
    const data = await productModel.getCategory();
    return data;
},
getProductByCategory: async function (category) {
    const data = await productModel.getProductByCategory(category);
    return data;
},
updateProduct : async function(body){
    const data = await productModel.updateProduct(body);
    return data;
},
removeProduct : async function(id){
    const data = await productModel.removeProduct(id);
    return data;
},

};