var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createProduct,getProduct, getProductById,updateProduct, removeProduct} = require ("../controller/index");

router.post('/createProduct', createProduct);
router.get('/getProduct', getProduct);
router.get('/getProductById', getProductById);
router.put('/updateProduct', updateProduct);
router.delete('/removeProduct', removeProduct);

module.exports = router;
