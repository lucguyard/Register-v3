const express = require("express");
const route = express.Router();
const fonction = require("../fonction/fonc.js");

route
    .route("/register")
    .post(fonction.postRegister)
    .get(fonction.getRegister);

route
    .route("/login")
    .post()
    .get(fonction.getLogin);



module.exports = route 