// This schema file is to store response data from faulty's side

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResponseSchema = new Schema({
    comments : {type: String, required: true},
    doc : {type : String, required: true}
})

let ResponsesData = mongoose.model('response', ResponseSchema)

module.exports = ResponsesData