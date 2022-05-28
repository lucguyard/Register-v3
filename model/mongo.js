require('dotenv').config();
const mongoose = require("mongoose");

const x = {
    MongoURI : 'mongodb+srv://user_lg:'+ process.env.MDP + '@cluster0.wawol.mongodb.net/MyfirstDatabas?retryWrites=true&w=majority'
}

const schemaUser = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
    
});

const users = mongoose.model('testato', schemaUser);

module.exports = {users, x }; 
