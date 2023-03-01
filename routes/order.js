var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createOrder,getOrder, getOrderById,updateOrder, removeOrder} = require ("../controller/index");

router.post('/createOrder', createOrder);
router.get('/getOrder', getOrder);
router.get('/getOrderById', getOrderById);
router.put('/updateOrder', updateOrder);
router.delete('/removeOrder', removeOrder);

module.exports = router;
