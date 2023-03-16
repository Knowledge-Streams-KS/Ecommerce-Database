var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createProduct,getProduct, getProductById,updateProduct, removeProduct,createProductBulk,getProductByCategory,getCategory} = require ("../controller/index");

router.post('/createProduct', createProduct);
router.post('/createProductBulk', createProductBulk);
router.get('/getProduct', getProduct);
router.get('/getProductById', getProductById);
router.get('/getCategory', getCategory);
router.get('/getProductByCategory', getProductByCategory);
router.put('/updateProduct', updateProduct);
router.delete('/removeProduct', removeProduct);

module.exports = router;
