const express = require('express');
const userRouter = express.Router()
const FormModel  = require("../model/formModel")

userRouter.post("/register" , async(req , res, next)=>{
    const {firstName, lastName,email,phone,address}= req.body

    try{
        const user = new FormModel({firstName, lastName,email,phone,address})
        await user.save()
        res.send({"msg":"User has registred successfully"}) 
    }catch(err){
        res.send({"msg":"Something went wrong","err":err.message})
    }
})

module.exports = {userRouter};