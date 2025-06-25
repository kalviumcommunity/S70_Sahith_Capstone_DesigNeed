const mongoose=require('mongoose')

const designSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["streetWear","coutre","Formal","Ehtnic","Experimetal"],
        required:true
    },
    materialInfo:{
        type:String
    }
})

module.exports = mongoose.model('Design', designSchema);