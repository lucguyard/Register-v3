const express = require("express");
const route = express.Router();
const fonction = require("../fonction/fonc.js");
const { ensureAuthenticated }  =require("../config/auth");
route
    .route("/register")
    .post(fonction.postRegister)
    .get(fonction.getRegister);

route
    .route("/login")
    .post(fonction.postLogin)
    .get(fonction.getLogin);

route
    .route("/dashboard")
    .get(ensureAuthenticated, fonction.getDash);



module.exports = route ; 