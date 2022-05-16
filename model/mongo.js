require('dotenv').config();

module.exports = {
    MongoURI : 'mongodb+srv://user_lg:' + process.env.MDP + '@cluster0.wawol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}

