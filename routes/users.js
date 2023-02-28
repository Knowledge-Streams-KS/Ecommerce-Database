var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createUser,getUser, getUserById,updateUser, removeUser} = require ("../controller/index");


router.post('/createUser', createUser);
router.get('/getUser', getUser);
router.get('/getUserById', getUserById);
router.put('/updateUser', updateUser);
router.delete('/removeUser', removeUser);

module.exports = router;
