const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
const logger = require('morgan')   // for seeing api calls in terminal
const PORT = 3000
var morgan = require('morgan')

const app = new express()

require('dotenv').config()
require('./middlewares/mongoDB')   //to init mongoDB

app.use(cors())  // to connect frontend and backend without any disturbance
app.use(express.json())   // to receive data from front end
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
var multer = require('multer');

//api
const api = require('./routes/api')
app.use('/api',api)

// authentication routes
const jwt = require('jsonwebtoken');
app.post('/auth',async(req,res)=>{
    let {email,password} =req.body
    console.log(req.body)
    console.log(email,password)
    if(email=='curriculum' && password=='curriculum333'){
        let payload ={ email :email, password:password}
        let token =jwt.sign(payload, 'Ilikeapples333')
        console.log(token)


        res.status(200).json({message:'Success', status:200, token:token})
    }
    res.status(400).json({message:'unauthorized'})
})



//Server code
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})


