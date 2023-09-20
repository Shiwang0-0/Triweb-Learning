import express from 'express'
import mongoose from 'mongoose'
import { NextFunction, Request, Response } from 'express';


import UserRoute from './routes/user'
import authRoute from './routes/auth'
import quizRoute from './routes/quiz'
import examRoute from './routes/exam'
import reportRoute from './routes/report'
import {returnResponse} from './utils/interfaces'
import projectError from './helper/error';

const app=express(); //intialize application


const connectionString=process.env.CONNECTION_STRING || "";  //dont include connection string in the code.


app.use(express.json()); //parsing json data sent in the request


//including the userid in the Request so that userId can be a parameter to access the necessary details of the particular user.
//declaring it global so that it is accessible in all files.
//Request comes under Express, so namespace Express is required.
//this is added externally,the ones existing already will not be changed.
declare global{
    namespace Express{
        interface Request{
            userId:String;
        }
    }
}



app.get('/',(req,res)=>{
    res.send("hello connnected");
})


//redirect /auth route
app.use('/auth',authRoute);

//redirect /user route
app.use('/user',UserRoute);


//redirect /quizroute
app.use('/quiz',quizRoute);


//redirect /examroute
app.use('/exam',examRoute);



//redirect /reportRoute
app.use('/report',reportRoute);



app.use((err:projectError,req:Request,res:Response,next:NextFunction)=>{ //no path for error route


    let message:String;
    let statusCode:number; // not Number class

    if(err.statusCode < 500 && !!err.statusCode) 
    {
        message=err.message;
        statusCode=err.statusCode;
    }
    else{ //500 above errors are of server and database error,so we should not display them to user
        message="something went wrong,try after sometime"
        statusCode=500;
    } 
    let resp:returnResponse={status:"error",message,data:{}};
    if(!!err.data)
    {
        resp.data=err.data;
    }
   
    //redirect to developer team's email
    console.log(err.statusCode,err.message); 
    res.status(statusCode).send(resp);
})


mongoose.connect(connectionString,{})
  .then(()=>{
    app.listen(process.env.PORT);
    console.log("connected to Server");
})
.catch((error)=>{
    console.log(error);
    console.log("failed");
}); 

