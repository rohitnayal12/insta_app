const express=require("express")


const userRouter=express.Router()

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { UserModel } = require("../model/userModel")


//registration

userRouter.post("/register",async(req,res)=>{
const {name,email,gender,pass,age,city,is_married}=req.body

    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            if(err){
                res.send({"msg":err})
            }
            else{
                const user= new UserModel({
                    name,email,gender,pass:hash,age,city,is_married
                })
                await user.save()
                res.status(200).send({"msg":"New user has been registered successfully."})
            }
        });

    } catch (error) {
        res.status(400).send({"error":error})
    }
})



//Login 


userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body

    try {
        const user=await UserModel.findOne({email})
        //console.log(user)
        if(user){
            bcrypt.compare(pass,user.pass,async(err, result)=> {
                if(result){
                   const  token = jwt.sign({ userId:user._id, user:user.name }, 'shhhhh');
                   res.status(200).send({"msg":"Login successful",token:token})
                }
                else{
                    res.send({"error":err})
                }
            });
        }
        else{
            res.status(404).send({"msg":"Wrong Credentials....."})
        }
    } catch (error) {
        res.status(404).send({"error":error})
    }
})

module.exports={
    userRouter
}