const {models} = require ('../models/definition')

module.exports = {
    createRole : async function(body){
       
        const result = await models.Role.create({...body});
        return result;
    }
}