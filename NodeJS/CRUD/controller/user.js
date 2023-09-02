const userModel = require('../models/user')
//registration
module.exports.register= async(req,res)=>
{
    let insertedID= await userModel.insert(req.body);//will wait //insert will be called from models.
    console.log(insertedID);    
    if(insertedID>0)
    {
        res.send({status:"success",data:{id:insertedID}});
    }
    else
    {
        res.send({status:"error",message:"user registartion failed"}); //server not working,gives value 0.
    }
}
 
//get
module.exports.get= async(req,res)=>
{
    let data= await userModel.get(req.body);
    if(data)
    {
        res.send({status:"success",data:data});
    }
    else
    {
        res.send({status:"error",message:"user not found"});
    }
    // res.send(req.body);
}


//update
module.exports.update= async (req,res)=>
{
    let status= await userModel.update(req.body);
    if(status)
    {
        res.send({status:"success",message:"user data updated"});
    }
    else
    {
        res.send({status:"error",message:"user not updated"});
    }
}


//delete
module.exports.delete= async(req,res)=>
{
    let status= await userModel.delete(req.body);
    if(status)
    {
        res.send({status:"success",message:"user deleted"});
    }
    else
    {
        res.send({status:"error",message:"user not deleted"});
    }
}