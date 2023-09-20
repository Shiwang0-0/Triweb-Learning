
import { RequestHandler} from 'express'; //using request handler ,both ways can be used.
// import { NextFunction, Request, Response } from 'express';
import User from '../models/user'
import projectError from '../helper/error';
import {returnResponse} from '../utils/interfaces'
     


//localhost:3000/user/123?userId=456.
//where 123 is params and 456 is query.

const getUser:RequestHandler = async(req,res,next)=>{  //getting user will not include any kind of request body
    // console.log("req body: ",req.body); 
    // console.log("query :" ,req.query);  
    // console.log("params : ",req.params.userId);
    console.log(req.userId);
    let resp:returnResponse;
    try {
        const userId =req.params.userId; //userId retrieved from the URL

        if(req.userId!=req.params.userId) //compares the userid sent in the URL parameter and the userId we recieved after succesfully decoding the token.
        {
            const err = new projectError("function not allowed,userId not matched,user not authorized");
            err.statusCode=500;
            err.data={hi:"its an error"};
            throw err;  
        }

        const user =await User.findById(userId); 
        // const user =await User.findById(userId,{name:1,email:1});    to display only these content i.e displaying them forcefully.Request's userId was declared global so it is accessible.
        if(!user)
        {
            const err =new projectError("user not found");//Error Saving the registration attempt
            err.statusCode=401;
            throw err;
             
        }
        else
        {
            resp={status:"success",message:"user found",data:user}
            res.status(200).send(resp);
            console.log("done getting");
        }
    }
    catch(error)
    {
        // console.log(error);
        // resp={status:"error",message:"something went wrong",data:{}}
        // res.status(500).send(resp); 
        next(error);  //sends to error route 
    } 
}


const updateUser:RequestHandler=async(req,res,next)=>{
    let resp:returnResponse;
    try
    {
        if(req.userId!=req.body._id) //compares the userid sent in the URL parameter and the userId we recieved after succesfully decoding the token.Request's userId was declared global so it is accessible.
        {
            const err = new projectError("function not allowed,userId not matched,user not authorized");
            err.statusCode=401;
            throw err;
        }

        const userId =  req.body._id; //as in request's body we will be sending the id,retrieve it from there
        const user=await User.findById(userId);
        if(!user)
        {
            const err =new projectError("user not found");
            err.statusCode=401;
            throw err;
        }
        else{
            user.name=req.body.name; //changed the User's name to name what we sent in thelatest request.
            await user.save() //save the latest changes made
            resp={status:"success",message:"user updated",data:{}}
            res.send(resp);
            console.log("done updating");
    }
        }
        
    catch(error)
    {
        // console.log(error);
        // resp={status:"error",message:"something went wrong",data:{}}
        // res.status(500).send(resp); 
        next(error); //when inside async block sends to error route 
    }
}


export {getUser,updateUser}