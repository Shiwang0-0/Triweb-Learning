import express from 'express';

const router =express.Router();
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controllers/quiz'
import {isAuthenticated} from '../middlewares/isAuth';
import {body} from 'express-validator';


//Create
//POST/quiz/
router.post('/',isAuthenticated,[
    body('name').trim().not().isEmpty().isLength({min:4}).withMessage("please enter a valid name,with minimum 4 characters"),
    body('questionsList').custom(questionList=>{
        // console.log(questionList.length) //calculates arrays length 
        if(questionList.length ==0 )
        {
            return Promise.reject("enter atleast one question");
        }
        return true;
    }),
    body('answers').custom(answers=>{
        //console.log(Object.keys(answers).length); //as answers is object so we check the length of the keys to check if there are answers present or not.
        if(Object.keys(answers).length ==0 )
        {
            return Promise.reject("answers should not be empty");
        }
        return true;
    })
],createQuiz)


//get
//GET/quiz/:quizId
router.get('/:quizId?',isAuthenticated,getQuiz) //optional parameter quizId,so that we can access all quiz if quizId is not passed.


//put
//PUT/quiz
router.put('/',isAuthenticated,[
    body('name').trim().not().isEmpty().isLength({min:4}).withMessage("please enter a valid name,with minimum 4 characters"),
    body('questionsList').custom(questionList=>{
        // console.log(questionList.length) //calculates arrays length 
        if(questionList.length ==0 )
        {
            return Promise.reject("enter atleast one question");
        }
        return true;
    }),
    body('answers').custom(answers=>{
        //console.log(Object.keys(answers).length); //as answers is object so we check the length of the keys to check if there are answers present or not.
        if(Object.keys(answers).length ==0 )
        {
            return Promise.reject("answers should not be empty");
        }
        return true;
    })
],updateQuiz)


//delete
//DELETE/quiz/:quizId
router.delete('/:quizId',isAuthenticated,deleteQuiz)


//publish
//PUBLISH/quiz/publish
router.patch('/publish',isAuthenticated,publishQuiz)


export default router