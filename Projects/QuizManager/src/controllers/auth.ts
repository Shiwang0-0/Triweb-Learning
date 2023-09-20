import { RequestHandler} from 'express'; //using request handler ,both ways can be used.
import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import projectError from '../helper/error';
import { validationResult } from 'express-validator';
import {returnResponse} from '../utils/interfaces'
// const registerUser=async(req:Request,res:Response,next:NextFunction)=>{
    const registerUser:RequestHandler=async(req,res,next)=>{
    let resp:returnResponse;
    try{

        //validation
        const validationError =validationResult(req) // if validationResult found any error in the request body i.e if error is found in any validation criteria it will be check wheter we got some error or not.
        if(!validationError.isEmpty())
        {   
            const err =new projectError("validation failed");
            err.statusCode=422; //unprocessable entity
            err.data=validationError.array() //send the validation error in form of an array in the data
            throw err;
        }
        const email=req.body.email;
        const name=req.body.name;
        const password=await bcrypt.hash(req.body.password,12);


        

        const user=new User({email,name,password}); //retrieve the collection request body which user sends in a constant
    const result = await user.save(); //save the retrived collection in mongo database
    // console.log(req.body);
    // console.log("registration done");
    if(!result)
    {
        resp={status:"error",message:"No result found",data:{}} //Error Saving the registration attempt
        res.send(resp); 
    }
    else{
        resp={status:"success",message:"registration done",data:{userId:result._id}}
        res.send(resp);
    }
    }
    catch(error){
        // console.log(error);
        // resp={status:"error",message:"something went wrong",data:{}}//failed to register,some database error(or on sending duplicate data if validation is not proposed yet).
        // res.status(500).send(resp);
        next(error); //sends to error route 
    }
    
}



// const loginUser =async (req:Request,res:Response,next:NextFunction) =>{
    const loginUser:RequestHandler =async (req,res,next) =>{
    let resp:returnResponse;
    try
    {
        const email=req.body.email;
        const password=req.body.password;


        //find user with email
        const user =await User.findOne({email});
        // console.log(user);


        //verify password
        if(!user)
        {
            const err =new projectError("user not found");
            err.statusCode=401;
            throw err;
        }
        else{
            const status =await bcrypt.compare(password,user.password);

            if(status)
            {
                const token = jwt.sign({userId:user._id},"secretkeytodecrypt",{expiresIn:'1h'}) //creates a token while login process and this token will be needed to perform operations.
                resp={status:"success",message:"successfully logged in",data:{token}}
                res.status(200).send(resp);
            }
            else
            {
                const err =new projectError("crendential mismatched");
                err.statusCode=401;
                throw err;
            }
        }

        }

        catch(error)
        {
            // console.log(error);
            // resp={status:"error",message:"something went wrong",data:{}}
            // res.status(500).send(resp); 
            next(error); //sends to error route 
        }
}


const isUserExist=async (email:String)=>{ //to check if user already exist,and as it is a async function it will return a promise.
        //will be in status of the then block of promise that is in status
        //find user with email
        //email is comming inside the string.
        const user =await User.findOne({email});
        // console.log(user);

        if(!user)
        {
            return false;
        }
        return true;
}

export {registerUser,loginUser,isUserExist}