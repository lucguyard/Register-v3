require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


//passport
require('./config/passport')(passport);


//Connect with 
const db = require('./model/mongo.js');

 
mongoose.connect( db.x.MongoURI ,{ useNewUrlParser: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



//Use EJS
app.set('views' , './hard-page')
app.set('view engine' , 'ejs')

//Express Session   
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));

  app.use(passport.initialize());
  app.use(passport.session());  

  app.use((req,res,next) => {
      console.log(req.session);
      console.log(req.user);
      next();
  });

//Express Flash
app.use(flash());   

//Global Var
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next(); 
})

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