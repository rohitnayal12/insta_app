
const mongoose=require("mongoose")

const postSchema=({
   title:{type: String},
   body:{type: String},
   device:{type: String},
   no_of_comments:{type: Number},
   
})

const PostModel=mongoose.model("post",postSchema)


module.exports={
    PostModel
}























