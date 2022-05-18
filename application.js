require('dotenv').config();

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");




//Connect with 
const db = require('./model/mongo.js');


mongoose.connect( db.x.MongoURI ,{ useNewUrlParser: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Use EJS
app.set('views' , 'hard-page')
app.set('view engine' , 'ejs')

//Use BodyParser
app.use(express.urlencoded({extended : false}));
//Index 
app.get("/index", (req,res) => {
    res.render('index');
})

// Create the first path
app.use("/index", require("./path/route.js"));

PORT = process.env.PORT || 4000 ;
//Listen the server
app.listen(PORT , () => {
    try
    {
        console.log(" Your server is running to port " + PORT , ", Welcome");
    }
    catch(err)
    {
        res.err;
    }
});