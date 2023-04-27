const express = require('express')
const connection  = require("./db")
const {userRouter} = require("./Routes/UserRoute")
const app  =  express()
app.use(express.json())
const cors = require("cors")
app.use(cors({
    origin: "*"
}))
app.get("/" , (req , res)=>{
    res.send("HomePage")
})
app.use("/users" , userRouter)






app.listen(4500 , async() =>{
    try{
   await connection;
   console.log("Connected to db")
    }catch(err){
        console.log("Something went wrong")
        console.log(err)
        
    }
    console.log(`Running on the port 4500 `)
});