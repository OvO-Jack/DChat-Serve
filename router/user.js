const express = require("express");

const router = express.Router();
const userController = require("../controller/userController");

const { body, validationResult } = require("express-validator");
const validator = require("../middleware/validator/userValidator");

const {verifyToken} = require('../utils/jwt')
router
    .post(
        "/register",
        validator.register,
        userController.register
    )
    .post(
        "/logins",
        validator.login,
        userController.login
    )
    .get("/users",verifyToken, (req, res) => {
        console.log(req.method);
        res.send("/users");
    });
module.exports = router;
