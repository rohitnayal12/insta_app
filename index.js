const express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/userRoute")
const { postRouter } = require("./routes/postRoute")
//const { userRouter } = require("./routes/userRoute")


const app=express()

app.use(express.json())
 app.use("/users",userRouter)
 app.use("/posts",postRouter)



app.get ("/",async(req,res)=>{
    console.log("welcome ")
    res.send("HOMEPAGE")
})

app.listen(8080,async()=>{
    try {
       await connection 
       console.log("Server is running.....")
    } catch (error) {
        console.log(error)
    }
})