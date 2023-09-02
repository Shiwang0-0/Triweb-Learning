const express = require('express');
const userRoute = require('./router/user');
const app=express();

app.use(express.json()); //parse json data into the body

app.get('/',(req, res)=>
{
    res.send("working");
})

app.use('/user',userRoute);

app.listen(3000);