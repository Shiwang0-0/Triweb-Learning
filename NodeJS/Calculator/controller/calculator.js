
//These anonymous functions willl be needed to import in the router file.
//to import them in other file we have to export them when we create it

 
//We dont need Url's here,Url's will be on router.

module.exports.add=(req,res)=>
{
    a=req.body.num1;
    b=req.body.num2;
    res.send("addtion is: "+(a+b));
}

module.exports.subtract=(req,res)=>
{
    a=req.body.num1;
    b=req.body.num2;
    res.send("subtraction is: "+(a-b));
}


module.exports.multiply=(req,res)=>
{
    a=req.body.num1;
    b=req.body.num2;
    res.send("multiplication is: "+(a*b));
}

module.exports.divide=(req,res)=>
{
    a=req.body.num1;
    b=req.body.num2;
    res.send("division is: "+(a/b));
}
