// This Schema file is to store requirements data from Admin's side

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RequirementSchema = new Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    inst: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, required: true },
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now()}
})


let RequirementsData = mongoose.model('requirement',RequirementSchema)

module.exports = RequirementsData
