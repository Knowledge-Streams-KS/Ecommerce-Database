module.exports = {
  //users
  createUser: require("./users/createUser"),
  getUser: require("./users/getUser"),
  getUserById: require("./users/getUserById"),
  updateUser: require("./users/updateUser"),
  removeUser: require("./users/removeUser"),

  //Products
  createProduct: require("./product/createProduct"),
  getProduct: require("./product/getProduct"),
  getProductById: require("./product/getProductById"),
  updateProduct: require("./product/updateProduct"),
  removeProduct: require("./product/removeProduct"),

  //roles
  createRole: require("./common/role"),

};
