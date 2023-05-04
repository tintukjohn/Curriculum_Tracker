// This schema file is to store response data from faculty's side

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResponseSchema = new Schema({
    comments : {type: String, required: true},
    doc : {type : String, required: true},
    fileDetails : {type : Object, required: true},
    req_id : {type : String, required: true},
    approve : {type : Boolean, required: true},
})

let ResponsesData = mongoose.model('response', ResponseSchema)

module.exports = ResponsesData 