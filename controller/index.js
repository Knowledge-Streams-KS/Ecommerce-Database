module.exports = {

  //login
   login: require("./common/login"),
   logout: require("./common/logout"),
   createToken: require("./common/createToken"),

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

  //Cart
  createCart: require("./cart/createCart"),
  getCart: require("./cart/getCart"),
  getCartById: require("./cart/getCartById"),
  updateCart: require("./cart/updateCart"),
  removeCart: require("./cart/removeCart"),

  //Orders
  createOrder: require("./order/createOrder"),
  getOrder: require("./order/getOrder"),
  getOrderById: require("./order/getOrderById"),
  updateOrder: require("./order/updateOrder"),
  removeOrder: require("./order/removeOrder"),

  //roles
  createRole: require("./common/role"),

};
