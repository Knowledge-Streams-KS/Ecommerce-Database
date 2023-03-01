const { models } = require("../models/definition");

module.exports = {
  createOrder: async function (body) {
    const result = await models.Orders.create(body);
    return result;
  },
  getOrder: async function (body) {
    const result = await models.Orders.findAll();
    return result;
  },
  getOrderById: async function (ids) {
    const result = await models.Orders.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateOrder: async function (body) {
    console.log(body);
    const result = await models.Orders.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeOrder: async function (ids) {
    const result = await models.Orders.destroy({
      where: { id: ids },
    });
    return "Deleted Orders";
  },
};
