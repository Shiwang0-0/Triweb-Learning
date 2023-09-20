import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import projectError from '../helper/error';

const isAuthenticated=(req:Request,res:Response,next:NextFunction)=>{
    try{
        // throw new Error("iam in authenctication process");
    // Promise.reject("iam in authenctication process");
    // res.send("iam in authenctication process");

    //take token from the header 
    const authHeader=req.get('Authorization');

    if(!authHeader)
    {

        const err =new projectError("not authenticated ,jwt missing");
        err.statusCode=401;
        throw err;
        // const err=new Error("not authenticated ,jwt missing");
        // // err.statusCode=401;
        // throw err;
        // // res.status(401).send("not authenticated,jwt missing");
    }
   
        
    const token = authHeader.split(' ')[1];
        // console.log(token);

    let decodedToken:{userId:String,iat:Number,exp:Number};
    try{
        //decode the token using the sign "secretkeytodecrypt".
        decodedToken=<any>jwt.verify(token,"secretkeytodecrypt");
        // console.log(decodedToken);
    }catch(error){
        const err =new projectError("not authenticated ,cannot succesfully decode the token or its key");
        err.statusCode=401;
        throw err;
        // const err=new Error("not authenticated ,cannot succesfully decode the token or its key");
        // // err.statusCode=401;
        // throw err;
    }

    if(!decodedToken)
    {
        const err =new projectError("not authenticated ,jwt missing");
        err.statusCode=401;
        throw err;
        // const err=new Error("not authenticated ,jwt missing");
        // // err.statusCode=401;
        // throw err;
    }
    //take userid , jet token containts userId

    req.userId=decodedToken.userId; //Request's userId was declared global so it is accessible.
    // console.log(decodedToken);
    next(); //goes to the next middleware   
    }

    catch(error)
    {
        next(error);  //sends to error route 
    }
}

export {isAuthenticated};