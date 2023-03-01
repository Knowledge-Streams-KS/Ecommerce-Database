var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createRole,login,logout} = require ("../controller/index");

router.post('/createRole', createRole);
router.post('/login', login);
router.post('/logout', logout);


module.exports = router;
