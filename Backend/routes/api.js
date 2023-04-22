const express = require('express')
const router = express.Router()
const USER_DATA = require('../models/user')
const REQ_DATA = require('../models/requirement')



// response list
router.get('/requirementlist', async (req, res) => {
    try {

        const list = await REQ_DATA.find()
        res.send(list)

    } catch (error) {
        console.log(error)
    }
})



module.exports = router