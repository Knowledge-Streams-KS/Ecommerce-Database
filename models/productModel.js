const { models } = require("../models/definition");

module.exports = {
  createProduct: async function (body) {
    const result = await models.Products.create(body);
    return result;
  },
  createProductBulk: async function (body) {
		const result = await models.Products.bulkCreate(body.products);
		return result;
	},
  getProduct: async function (body) {
    const result = await models.Products.findAll();
    return result;
  },
  getProductById: async function (ids) {
    const result = await models.Products.findOne({
      where: { id: ids },
    });
    return result;
  },
  getCategory: async function () {
		let result = await models.Products.findAll();
		const uniqueCategory = [...new Set(result.map((obj) => obj.category))];
		return uniqueCategory;
	},
  getProductByCategory: async function (cat) {
    const result = await models.Products.findAll({
      where: { category: cat},
    });
    return result;
  },
  updateProduct: async function (body) {
    console.log(body);
    const result = await models.Products.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeProduct: async function (ids) {
    const result = await models.Products.destroy({
      where: { id: ids },
    });
    return "Deleted Products";
  },
};
