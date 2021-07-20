const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required
    }
})

modules.exports = mongoose.model('User', userSchema)