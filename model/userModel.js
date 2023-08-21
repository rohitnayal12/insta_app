
const mongoose=require("mongoose")

const userSchema=({
   name:{type: String},
   email:{type: String},
   gender:{type: String},
   pass:{type: String},
   age:{type: Number},
   city:{type: String},
   is_married:{type: Boolean}
})

const UserModel=mongoose.model("mynewuser",userSchema)


module.exports={
    UserModel
}























// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean