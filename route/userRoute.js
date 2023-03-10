
const express = require('express');
const userControllers = require('../controller/userController');
const router = express.Router();

router.route("/").get(userControllers.getAllUsers).post(userControllers.createNewUser);

module.exports = router;