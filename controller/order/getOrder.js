const orderService = require("../../service/orderService")

module.exports = async function (req,res){
    const data = await orderService.getOrder(req.body);
    res.send(data);

}