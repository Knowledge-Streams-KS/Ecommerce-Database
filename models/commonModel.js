const {models} = require ('../models/definition')
const jwtSecret = require ('../config.json')
const jwt = require ('jsonwebtoken')

let refreshTokens = []

function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

module.exports = {
    createRole : async function(body){
       
        const result = await models.Role.create({...body});
        return result;
    },

    login: async function(body){
        console.log(body);
        let user = await models.User.findOne({
            where:{
                userName:body.userName
            }
        })
        user = user.dataValues;
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken: accessToken, refreshTokens:token})
    },

    logout: async function(body){
        refreshTokens = refreshTokens.filter(token => token !== body.token)
        return({refreshToken: refreshTokens})
    }
}