const jwt =require("jsonwebtoken")




const auth=(req,res,next)=>{
    const token =req.headers.authorization.split(" ")[1]

    if(token){
        const  decoded = jwt.verify(token, 'shhhhh');

        if(decoded){
           req.body.userId=decoded.userId
           req.body.user=decoded.user

            next()
        }
        else{
            res.send({msg:"Invalid Token"})
        }
    }
    else{
        res.send({err:"Login First...."})
    }
}

module.exports={
    auth
}