const cartService = require("../../service/cartService")

module.exports = async function (req,res){
    const data = await cartService.getCartById(req.query.ids);
    res.send(data);

}