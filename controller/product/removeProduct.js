const productService = require("../../service/productService")

module.exports = async function (req,res){
    const data = await productService.removeProduct(req.query.id);
    res.send(data);

}