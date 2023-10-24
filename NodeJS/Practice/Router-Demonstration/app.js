//Entry point
const express=require('express')
const userRouter =require('./Routers/user')
const app=express();

app.use('/user',userRouter)

app.listen(3000);