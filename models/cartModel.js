const { models } = require("../models/definition");

module.exports = {
  createCart: async function (body) {
    const result = await models.Cart.create(body);
    return result;
  },
  getCart: async function (body) {
    const result = await models.Cart.findAll();
    return result;
  },
  getCartById: async function (ids) {
    const result = await models.Cart.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateCart: async function (body) {
    console.log(body);
    const result = await models.Cart.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeCart: async function (ids) {
    const result = await models.Cart.destroy({
      where: { id: ids },
    });
    return "Deleted Carts";
  },
};
