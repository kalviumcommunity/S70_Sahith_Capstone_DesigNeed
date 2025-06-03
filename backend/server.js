const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const plantRoutes = require('./routes/plantRoutes')

dotenv.config()  

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use('/user', plantRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`Database connected successfully`)

    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`)
    })
})
.catch((err)=>{
    console.log({'message': err.message})
})