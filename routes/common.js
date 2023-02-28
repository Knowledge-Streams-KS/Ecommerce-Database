var express = require('express');
var router = express.Router();
const bcrypt= require("bcrypt");

const {createRole} = require ("../controller/index")

router.post('/createRole', createRole);

module.exports = router;
