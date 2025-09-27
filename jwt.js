const jwt =require('jsonwebtoken')

//creating middleware (this middle when passed to any route will make sure that whoever route you are accessing needs a token and then
//                      verifies the token if token is provided)
const jwtAuthMiddleware=(req,res,next)=>{
    //1: Extract jwt from request header:
    const token=req.headers.authorization.split(' ')[1]; 
    //here token is passed like this in authorization/header: Bearer dsfdhsvfhg...dsghs i.e why we use split(' ') will will split it on space
    //and then we access second part i.e token dfsvf..dfjdsb 1 index because 0 index will have Bearer text which we don't need

    // 2: If token is not passed:
    if(!token){
        res.status(401).json({error:'Unauthorized'})
    }

    //3: When token is present:
    try {
        //4:Verifying the JWT token: it will return decoded payload
        const decodedPayload=jwt.verify(token,process.env.JWT_SECRET)

        //5: Returing the decodedPayload to the user
        req.user=decoded
        next()
    } catch (error) {
        console.log(`Error in jwtAuthMiddleware: ${error}`)
        res.status(401),json({error:"Invalid Token"})
    }
}