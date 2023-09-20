//redirect request to particular method on controller

import express from 'express';
import {registerUser,loginUser,isUserExist} from '../controllers/auth';
import {body} from 'express-validator'; //sets validations to user routes.


const router=express.Router();

//POST /auth/
router.post('/',[
    body('name').trim().not().isEmpty().isLength({min:4}).withMessage("please enter a valid name,with minimum 4 characters"), //setting validations to name in the userroute for registration.
    body('email').isEmail()
    .custom((emailId:String)=>{     //custom returns a promise
        return isUserExist(emailId)
        .then((status:Boolean)=>{ //status will recieve the return value from the isUserExist function of the controller
            if(status)
            {
                // const err=new projectError("user already exist");
                // err.statusCode=422;
                // throw err;
                return Promise.reject("user already exist");
            }
            
        })
        .catch((err)=>{
            return Promise.reject(err); 
        })
    }),
    body('password')
    .trim().isLength({min:8}).withMessage("enter password at least"),
    body('confirmPassword').trim()
    .custom((value:String,{req})=>{
        // console.log(value);
        // console.log(req.body);
        if(value!=req.body.password)
        {
            return Promise.reject("password mismatched");
        }
        return true; //if password matched then return true.
    })

],registerUser)


//POST /auth/login
router.post('/login',loginUser)


export default router;