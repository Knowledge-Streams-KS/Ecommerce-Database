const orderService = require("../../service/orderService")

module.exports = async function (req,res){
    const data = await orderService.removeOrder(req.query.id);
    res.send(data);

}