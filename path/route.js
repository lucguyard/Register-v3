const express = require("express");
const route = express.Router();
//const fonction = require("../fonction/");

route
    .route("/register")
    .post(async (req, res) => {
        res.end("hello boy")
    })
    .get(async (req, res) => {
        res.end("register page")
    });


module.exports = route 