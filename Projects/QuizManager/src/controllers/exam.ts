
import { RequestHandler} from 'express'; //using request handler ,both ways can be used.
// import { NextFunction, Request,Response } from "express"
import Quiz from "../models/quiz"
import projectError from "../helper/error";
import Report from "../models/report";
import {returnResponse} from '../utils/interfaces'


const startExam:RequestHandler=async(req,res,next)=>{
    try{
        const quizId=req.params.quizId
        const quiz=await Quiz.findById(quizId,{name:1,questionsList:1,isPublished:1}); //we should have the quiz which we want to attempt
        //to start the exam we should have the id of te exam that is needed to be attempted.
    if(!quiz)
    {
        const err =new projectError("quiz not found");//Error starting the quiz 
        err.statusCode=404;
        throw err;
    }
    if(!quiz.isPublished)
    {
        const err =new projectError("quiz not published,cannot attempt a non published quiz");
        err.statusCode=405;
        throw err;
    }
    const resp:returnResponse={status:"success",message:"exam started",data:quiz};
    res.status(200).send(resp);
    console.log("exam started")
    // res.send(quiz) 
    }
    catch(error)
    {
        next(error);
    }

}

const submitExam:RequestHandler=async(req,res,next)=>{
    try{
        const quizId=req.body.quizId;
    const attemptedQuestion=req.body.attemptedQuestion;

    const quiz=await Quiz.findById(quizId,{answers:1});
    if(!quiz)
    {
        const err =new projectError("quiz not found");//Error starting the quiz 
        err.statusCode=404;
        throw err;
    }
    const answers=quiz.answers;
    const allQuestions=Object.keys(answers); //stores all questions in object format
    const total=allQuestions.length; //length of key value pair in the question object is the total number of questions

    const userId=req.userId //set through authentication route
    let score =0;

    for(let i=0;i<total;i++)
    {
        let questionNumber=allQuestions[i];
        if(!! attemptedQuestion[questionNumber] && answers[questionNumber]===attemptedQuestion[questionNumber])
        {
            score=score+1;
        }
    }
     const report=new Report({userId,quizId,score,total});
     const data=await report.save(); //collection result is saved
    // res.send(allQuestions) keys 
    const resp:returnResponse={status:"success",message:"exam submitted",data:{total:total,score:score,resultId:data._id}};  //saved result collection will have some id,that will be the result id
    res.status(200).send(resp);
    console.log("exam submitted")
    // res.send({total:total,score:score,resultId:data._id}); 
    }
    catch(error)
    {
        next(error);
    }
}


export {startExam,submitExam}