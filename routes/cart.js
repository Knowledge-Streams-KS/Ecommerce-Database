var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createCart,getCart, getCartById,updateCart, removeCart} = require ("../controller/index");

router.post('/createCart', createCart);
router.get('/getCart', getCart);
router.get('/getCartById', getCartById);
router.put('/updateCart', updateCart);
router.delete('/removeCart', removeCart);

module.exports = router;
