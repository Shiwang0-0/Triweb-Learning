//redirect request to particular method on controller

import express from 'express';
import {getUser,updateUser} from '../controllers/user';
import {isAuthenticated} from '../middlewares/isAuth';

const router=express.Router();


//user should be authenticated,authentication is the process of verifying someone who should have valid email and password.
//user should be authorized,authorization is the process of verifying what specific applications, files, and data a user has access to.

// GET /user/:userId
router.get('/:userId',isAuthenticated,getUser) //goes to the isauthenticated middleware to check if user is autheticated before getting the details of the user from the controller.


//PUT /user/
router.put('/',isAuthenticated,updateUser) 



export default router;