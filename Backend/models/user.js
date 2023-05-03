const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type:String, required:true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    created_at: {type:Number, default:Date.now().valueOf()},
    updated_at: {type:Number, default:Date.now().valueOf()}
})


let UserData = mongoose.model('userdetail',UserSchema)

module.exports = UserData