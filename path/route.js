const express = require("express");
const route = express.Router();
const fonction = require("../fonction/fonc.js");

route
    .route("/register")
    .post(async (req, res) => {
        res.end("hello boy")
    })
    .get(fonction.getRegister);

route
    .route("/login")
    .post()
    .get(fonction.getLogin);



module.exports = route 