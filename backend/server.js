const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const designs = require('./routes/designs')

dotenv.config()  

const app = express();
const PORT = 8000;
app.use(express.json());
app.use('/user', designs);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`Database connected successfully`)

})
.catch((err)=>{
    console.log({'message': err.message})
})
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})
