
const User = require('../model/mongo').users;
const bcrypt = require ('bcryptjs');
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'name' }, (name, password ,done) => {
            User.findOne({ name : name})
            .then( user =>  {
                if (!user){
                    return done(null, false , { message : 'that name is not registered'});
                }
                bcrypt.compare(password, user.password, (err, isMatch) =>{
                    if(err) throw err;
                    if(isMatch)
                    {
                        return done(null, user);    
                    }
                    else {
                        return done(null, false, { message : 'password incorrect'});
                    }
                });
            })
            .catch (err => console.log(err));
    })
        )


passport.serializeUser( (user,done) => {
    done(null , user.id);
});

passport.deserializeUser( (id,done) => {
    User.findById(id ,(err,user) => {
        done(err,user);
    });
});


}