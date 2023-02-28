const bcrypt = require('bcrypt');
const { signup } = require('../controller');
const userModel = require("../models/userModel")

module.exports = {
    createUser : async function(body){
        const saltRounds=10;
        body.password = await bcrypt.hashSync(body.password,saltRounds);
        const data = await userModel.createUser(body);
        return data;
},
    getUser : async function(body){
        const data = await userModel.getUser();
        return data;
},
    getUserById : async function(ids){
        const data = await userModel.getUserById(ids);
        return data;
},
updateUser : async function(body){
    const data = await userModel.updateUser(body);
    return data;
},
removeUser : async function(id){
    const data = await userModel.removeUser(id);
    return data;
},
//     login : async function(password,hash){
//     const saltRounds=10;
//  // const hash = bcrypt.hashSync(password,saltRounds);
//     const match = await bcrypt.compare(password,hash)
//     return match;
// },
//     signup : function(body){
//         const saltRounds=10;
//      body.password = bcrypt.hashSync(body.password,saltRounds);
//     return body;
// }
};