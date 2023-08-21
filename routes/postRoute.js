const express=require("express")
const { auth } = require("../middleware/auth")
const { PostModel } = require("../model/postModel")

const postRouter=express.Router()


//add post

postRouter.post("/add",auth,async(req,res)=>{
    try {
        post= new PostModel(req.body)
       
        await post.save()
        return res.status(200).send({msg:"A new post has been done successfully."})
    } catch (error) {
        res.send({error:error})
        
    }
})

//get post

postRouter.get("/",auth,async(req,res)=>{
    try {
        const post=await PostModel.find(
            {userId:req.body.userId}
        )
        return res.status(200).send(post)
    } catch (error) {
        res.send({error:error})
    }
})



//update post 

postRouter.patch("/update/:postId",auth,async(req,res)=>{
    const {postId} = req.params

    post= await PostModel.findOne({_id:postId})

    try {
        if(req.body.userId !== post.userId) {
            return res.status(404).send({msg:"You are not authorized to access this."})
        }
        else{
            post = await PostModel.findByIdAndUpdate({_id:postId}, req.body)
            return res.status(200).send({msg:"Post has been updated."})
        }
    } catch (error) {
        res.send({error:error})
    }
})


//delete post

postRouter.delete("/delete/:postId",auth,async(req,res)=>{
    const {postId} = req.params

    post= await PostModel.findOne({_id:postId})

    try {
        if(req.body.userId !== post.userId) {
            return res.status(404).send({msg:"You are not authorized to access this."})
        }
        else{
            post = await PostModel.findByIdAndDelete({_id:postId})
            return res.status(200).send({msg:"Post has been deleted."})
        }
    } catch (error) {
        res.send({error:error})
    }
})






module.exports = {
    postRouter
}
