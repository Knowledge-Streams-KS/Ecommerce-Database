const { login } = require('../models/commonModel');
const commonModel = require('../models/commonModel')

module.exports  = {
    createRole : async function(body){
        const data = await commonModel.createRole(body);
        return data;
    },
    login : async function(body){
        const data = await commonModel.login(body);
        return data;
    },
    logout : async function(body){
        const data = await commonModel.logout(body);
        return data;
    },
    createToken : async function(body){
        const data = await commonModel.createToken(body);
        return data;
    }
}