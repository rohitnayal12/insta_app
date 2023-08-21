
const mongoose=require("mongoose")

const postSchema=({
      title:{type: String},
   body:{type: String},
   device:{type: String},
   no_of_comments:{type: Number},
   userId:{type: String},
   user:{type: String}
   
})

const PostModel=mongoose.model("post",postSchema)


module.exports={
    PostModel
}























