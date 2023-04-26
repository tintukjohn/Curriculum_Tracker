const express = require('express')
const router = express.Router()
const USER_DATA = require('../models/user')
const REQ_DATA = require('../models/requirement')
const path = require('path');
const multer = require('multer');
const app = express();
const mongoose = require('mongoose');



// response list
router.get('/requirementlist', async (req, res) => {
    try {

        const list = await REQ_DATA.find()
        res.send(list)

    } catch (error) {
        console.log(error)
    }
})

//require add
router.post('/require', async(req,res)=>{
    try {
        let item = {
            name: req.body.name,
            area: req.body.area,
            inst: req.body.inst,
            category: req.body.category,
            duration: req.body.duration
        }
        const newReq = new REQ_DATA(item)
        const saveReq = await newReq.save()

        res.send(saveReq);

    } catch (error) {
        console.log(error);
    }
})




module.exports = router