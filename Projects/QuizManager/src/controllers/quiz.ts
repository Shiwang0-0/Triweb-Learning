import { RequestHandler } from 'express'; //using request handler ,both ways can be used.
// import { NextFunction, Request,Response } from "express";
import Quiz from "../models/quiz";
import projectError from "../helper/error";
import { validationResult } from 'express-validator';
import { returnResponse } from '../utils/interfaces'


const createQuiz: RequestHandler = async (req, res, next) => {

    try {
        //console.log(req.userId);
        const validationError = validationResult(req)  //when router fails it stores the reuslt in the request,   validationResult retrives that result from the req.
        if (!validationError.isEmpty()) {
            const err = new projectError("validation failed");
            err.statusCode = 422; //unprocessable entity
            err.data = validationError.array() //send the validation error in form of an array in the data
            throw err;
        }


        const createdBy = req.userId; //get userId from authenticated process
        const name = req.body.name;
        const questionsList = req.body.questionsList;
        const answers = req.body.answers;

        const quiz = new Quiz({ createdBy, name, questionsList, answers });
        const result = await quiz.save()
        const resp: returnResponse = { status: "success", message: "quiz created successfully", data: { quizId: result._id } };
        res.status(201).send(resp);
        console.log("quiz create")
    }
    catch (error) {
        next(error);
    }
}

const getQuiz: RequestHandler = async (req, res, next) => {

    try {
        // res.send(req.params.quizId);
        // console.log("quiz get")
        let quiz;
        const quizId = req.params.quizId;
        if (!!quizId) {
            
            // console.log(quizId);
            quiz = await Quiz.findById(quizId, { name: 1, questionsList: 1, answers: 1, createdBy: 1 }); //  this is called projection,1 represents thats these things are allowed to be edited, ._id will be displayed by default.
            console.log(quiz);
            if (!quiz) {
                const err = new projectError("quiz not found");//Error getting the quiz attempt
                err.statusCode = 405;
                throw err;
            }
            if (req.userId !== quiz.createdBy.toString()) //if the user who created the quiz and the user who is logged in at the time are not same then they are not authorized to do that task.
            //.toString is used because createdBy returns an object,so even if they were same it would have given an error. 
            {
                const err = new projectError("you are not authorised for this task");
                err.statusCode = 403;
                throw err;
            }
        }
        else {
            
            quiz = await Quiz.find({ createdBy: req.userId });
            // if(quiz.length===0){
            //     const err = new projectError("You are not authorized ,quiz length is null");
            //     err.statusCode = 403;
            //     throw err;
            //   }
        }
        console.log(`this is the value${quiz}`);

        if (!quiz) {
            const err = new projectError("quiz not found");
            err.statusCode = 404;
            throw err;
        }


        const resp: returnResponse = { status: "success", message: "quiz retrived", data: quiz };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const updateQuiz: RequestHandler = async (req, res, next) => {
    try {

        const validationError = validationResult(req)  //when router fails it stores the reuslt in the request,   validationResult retrives that result from the req.
        if (!validationError.isEmpty()) {
            const err = new projectError("validation failed");
            err.statusCode = 422; //unprocessable entity
            err.data = validationError.array() //send the validation error in form of an array in the data
            throw err;
        }



        const quizId = req.body._id; //undefined ?
        console.log(quizId);
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new projectError("quiz not found");//Error updating the quiz
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.createdBy.toString()) //if the user who created the quiz and the user who is logged in at the time are not same then they are not authorized to do that task.
        //.toString is used because createdBy returns an object,so even if they were same it would have given an error. 
        {
            const err = new projectError("you are not authorised for this task");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.isPublished) {
            const err = new projectError("you cannot update a published quiz");
            err.statusCode = 405;
            throw err;
        }

        quiz.name = req.body.name;
        quiz.questionsList = req.body.questionsList;
        quiz.answers = req.body.answers;
        await quiz.save();
        const resp: returnResponse = { status: "success", message: "quiz updated", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const deleteQuiz: RequestHandler = async (req, res, next) => {
    // res.send(req.params.quizId);

    try {
        const quizId = req.params.quizId
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new projectError("quiz not found");//Error updating the quiz
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.createdBy.toString()) //if the user who created the quiz and the user who is logged in at the time are not same then they are not authorized to do that task.
        //.toString is used because createdBy returns an object,so even if they were same it would have given an error. 
        {
            const err = new projectError("you are not authorised for this task");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.isPublished) {
            const err = new projectError("you cannot delete a published quiz");
            err.statusCode = 405;
            throw err;
        }
        await Quiz.deleteOne({ _id: quizId });
        const resp: returnResponse = { status: "success", message: "quiz deleted", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error)
    }

    console.log("quiz delete")
}



const publishQuiz: RequestHandler = async (req, res, next) => {
    // res.send(req.body);

    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new projectError("quiz not found");//Error updating the quiz
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.createdBy.toString()) //if the user who created the quiz and the user who is logged in at the time are not same then they are not authorized to do that task.
        //.toString is used because createdBy returns an object,so even if they were same it would have given an error. 
        {
            const err = new projectError("you are not authorised for this task");
            err.statusCode = 403;
            throw err;
        }
        quiz.isPublished = true;
        await quiz.save()
        const resp: returnResponse = { status: "success", message: "quiz published", data: {} };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error)
    }
    console.log("quiz publish")
}



export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz }