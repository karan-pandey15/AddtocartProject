const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     location:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     date:{
        type:Date,
        default : Date.now 
     }
})


// Hashing password 

userSchema.pre('save', async function (next){
   if(this.isModified('password')){
        this.password =  await bcrypt.hash(this.password,12);
   }    
   next();
})



module.exports = mongoose.model("user",userSchema);
 