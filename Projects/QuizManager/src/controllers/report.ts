import Report from "../models/report";
import { RequestHandler} from 'express'; //using request handler ,both ways can be used.
// import { Request,Response,NextFunction } from "express";
import projectError from "../helper/error";
import {returnResponse} from '../utils/interfaces'

const getReport:RequestHandler=async(req,res,next)=>{
    try{
        let report;
        // res.send("report");
        if(!!req.params.reportId)
        {
            const reportId=req.params.reportId;
            report=await Report.findById(reportId);
            if(report)
            {
                if(report.userId.toString() !== req.userId)
                {
                const err=new projectError("you are not allowed");
                err.statusCode=405; 
                throw err;
                }
            }
            else
            {
                const err=new projectError("cannot get the report,report id mismatched");
                err.statusCode=405; 
                throw err;
            }   
        }
        else
        {
            report =await Report.find({userId:req.userId});
        }
        
    if(!report)
    {
        const err=new projectError("report not found");
        err.statusCode=404;
        throw err;
    }

   
    // console.log(report);
    const resp:returnResponse={status:"success",message:"report retrieved",data:report};
        res.status(201).send(resp);
        console.log("quiz create")
    }
    
    catch(error)
    {
        next(error);
    }
}


export {getReport};