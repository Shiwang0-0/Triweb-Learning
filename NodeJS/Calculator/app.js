//use app.js to:
//1)initialize the server
//2)choose as an entry point
//3)parsing(single time work)
//4)create routers(sends all request of a certain task to that file)
//programs are on controller,router routes to that end point.Takes middleware to controller



const express=require('express');
const calculator_router =require('./router/calculator');
const app=express();

app.get('/',(req,res) => { 
    res.send("iam response");
});

// app.get('/add',(req,res)=>
// {
//     res.send("add");
// })

app.use(express.json());


// app.get('/',(req,res) => {
//     console.log(req); //prints all the request which are bieng send
//  });


//app.use('the common address',destination)

app.use('/calculator',calculator_router); //handles all types of routes,get,post. goes to const router =express.router(); line

app.listen(3000);