const productService = require('../../service/productService');

module.exports = async function (req, res) {
	const data = await productService.getProductByCategory(req.query.category);
	res.send(data);
};
