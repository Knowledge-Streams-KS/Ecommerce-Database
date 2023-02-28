const { models } = require("../models/definition");

module.exports = {
  createProduct: async function (body) {
    const result = await models.Products.create(body);
    return result;
  },
  getProduct: async function (body) {
    const result = await models.Products.findAll();
    return result;
  },
  getProductById: async function (ids) {
    const result = await models.Products.findAll({
      where: { id: ids },
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
