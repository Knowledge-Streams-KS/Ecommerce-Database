const orderService = require("../../service/orderService")

module.exports = async function (req,res){
    const data = await orderService.getOrderById(req.query.ids);
    res.send(data);

}