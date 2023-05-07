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

const path = require('path'); 
app.use(express.static('./dist/frontend'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
     });





//Server code
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})