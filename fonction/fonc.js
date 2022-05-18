  const User = require("../model/mongo" ).users;
  const bcrypt = require("bcryptjs");
/*
Page register

*/
exports.getRegister = async (req,res) => {
    res.render('register');
}

exports.postRegister = async (req,res) =>{
    const {name , password, password2} = req.body; 
    let error = [];
    if (!name || !password ||!password2)
    {
        error.push({msg : 'you forgot one field'});
    }
    if (password != password2)
    {
        error.push({msg : 'your passwords does not match each other'});
    }
    if(password.length <  6)
    {
        error.push({msg : 'your password is to weak'});
    }
    if(error.length > 0)
    {
        //console.log(req);
        res.render('register', {
            error,
            name, 
            password,
            password2
        });

        

    }
    else
    {
      User.findOne({name : name})
      .then(user => {
          if(user) {
              error.push({msg: "name already exist"});
              res.render("register", {
                error,
                  name,
                  password,
                  password2
                  
              });
          }
          else{
              const newUser = new User({
                  name : name,
                  password : password
              });
            bcrypt.genSalt(10, (err,salt) =>
                bcrypt.hash(newUser.password, salt, (err,hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(res.redirect('/index/login'))
                        .catch(err => console.log(err))
                }))
          }
      })

    }


}





/* 
-
- Page Login 
-
-
*/
exports.getLogin = async (req,res) => {
    res.render('login')
}

