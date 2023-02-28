const { models } = require("../models/definition");

module.exports = {
  createUser: async function (body) {
    const result = await models.User.create(body);
    return result;
  },
  getUser: async function (body) {
    const result = await models.User.findAll({
      include: models.Role,
    });
    return result;
  },
  getUserById: async function (ids) {
    const result = await models.User.findAll({
      where: { id: ids },
      include: models.Role,
    });
    return result;
  },
  updateUser: async function (body) {
    console.log(body);
    const result = await models.User.update(
      {
        ...body
      },

      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeUser: async function (ids) {
    const result = await models.User.destroy({
      where: { id: ids },
    });
    return "Deleted User";
  },
};
