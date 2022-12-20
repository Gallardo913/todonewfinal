const mongoose = require('mongoose')
const { stringify } = require('querystring')

const todoSchema= new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports= mongoose.model('ToDo', todoSchema)