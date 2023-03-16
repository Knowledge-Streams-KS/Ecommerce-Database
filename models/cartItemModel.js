const { models } = require("../models/definition");

module.exports = {
  createCartItem: async function (body) {
    const result = await models.CartItems.create(body);
    return result;
  },
  getCartItem: async function (body) {
    const result = await models.CartItems.findAll();
    return result;
  },
  getCartItemById: async function (ids) {
    const result = await models.CartItems.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateCartItem: async function (body) {
    console.log(body);
    const result = await models.CartItems.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeCartItem: async function (ids) {
    const result = await models.CartItems.destroy({
      where: { id: ids },
    });
    return "Deleted Carts";
  },
};
