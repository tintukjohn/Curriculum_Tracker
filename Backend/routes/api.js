const express = require('express')
const router = express.Router()
const USER_DATA = require('../models/user')
const REQ_DATA = require('../models/requirement')
const RES_DATA = require('../models/response')
const path = require('path');
const multer = require('multer');
const app = express();
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


// requirement list
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

//require delete
router.delete('/require/:id', async(req,res)=>{

    try {
    let id = req.params.id;

    const deleteRequire = await REQ_DATA.findByIdAndDelete(id)
    res.send(deleteRequire)
    } catch (error) {
       console.log(error)
    }
})

// require update


router.put('/require/:id', async(req,res) => {

    try {
        
        let id = req.params.id
        console.log(id);
        let updateData = req.body
        let updateRequire = await REQ_DATA.findByIdAndUpdate({_id:id}, {$set:updateData})
        res.send(updateRequire)

    } catch (error) {
        console.log(error);
    }
})

//response list
router.get('/responselist',async(req,res)=>{
    try {
        
        const fact = await RES_DATA.find()
        res.send(fact);

    } catch (error) {
        console.log(error);
    }
})

// get one response

router.get('/response/:id', async(req,res)=>{
    try {
    
let id = req.params.id
const singleRes = await RES_DATA.findById(id)
res.send(singleRes)

    } catch (error) {
       console.log(error);
    }
})

//response add
router.post('/response', async(req,res)=>{
    try {
        let term= {
            comments : req.body.comments,
            doc: req.body.doc,
            fileDetails: req.body.fileDetails,
            req_id: req.body.req_id,
            approve: req.body.approve
        }
        const newRes = new RES_DATA(term)
        const saveRes = await newRes.save()

        res.send(saveRes);

    } catch (error) {
        console.log(error);
    }
})

//response delete
router.delete('/response/:id', async(req,res)=>{

    try {
    let id = req.params.id;

    const deleteResponse = await RES_DATA.findByIdAndDelete(id)
    res.send(deleteResponse)
    } catch (error) {
       console.log(error)
    }
})


// response update
router.put('/response/:id', async(req,res) => {

    try {
        
        let id = req.params.id
        console.log(id);
        let updateData = req.body
        let updateResponse = await RES_DATA.findByIdAndUpdate({_id:id}, {$set:updateData})
        res.send(updateResponse)

    } catch (error) {
        console.log(error);
    }
})



// user signup using bcrypt library

router.post('/register',(req,res)=>{

    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            return res.json({success:false, message:"Hash error !"})
        }else{
            const user = new USER_DATA({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            user.save()
            .then((_)=>{
                res.json({success:true, message:"Account Has been Created"})
            })
            .catch((err)=>{
                if(err.code == 11000){
                    return res.json({success:false, message:"Email Already exsist"})
                }
                res.json({success:false, message:"Authentication failed"})
            })
        }
    })

});



module.exports = router