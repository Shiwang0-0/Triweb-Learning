const {getUser,postUser} =require('../Controller/user')
const express=require('express');

const router=express.Router();

router.get('/',getUser);
router.post('/',postUser);

module.exports=router;
