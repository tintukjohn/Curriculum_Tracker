const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ictakpjtteam2:abcd1234@cluster0.lvcvrya.mongodb.net/curriculum_tracker?retryWrites=true&w=majority',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})
//mongoose.connect('mongodb://127.0.0.1:27017/curriculum_tracker')
.then(() =>{
    console.log('MongoDB connected successfully!!!')
}).catch((error) =>{
    console.log(error.message)
})