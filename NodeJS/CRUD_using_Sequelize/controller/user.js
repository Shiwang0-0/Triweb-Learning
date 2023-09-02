const userModel = require('../models/user')
//registration
module.exports.register= async(req,res)=>
{
    try{
        let result= await userModel.create(req.body); 
        res.send({status:"success",data:{id:result.dataValues.id}});
    }
    catch(error)
    {
        res.send({status:"error",message:"user registartion failed"}); 
        //server not working,gives value 0.
    }
    //TO INSERT
    //create will need object value key pair.await will wait insert will be called from models.
    //Sequelize provides the create method, which combines the build and save methods shown above into a single method:
  
}
 
//get
module.exports.get= async(req,res)=>
{
    try{
        let data= await userModel.findByPk(req.body.id);
        res.send({status:"success",data:data});
    }
    catch{
        res.send({status:"error",message:"user not found"});
    }
    //TO GET
    // The findByPk method obtains only a single entry from the table, using the provided primary key.
    // res.send(req.body);
}


//update
module.exports.update= async (req,res)=>
{
    try{
        let user= await userModel.findByPk(req.body.id); 
        //first we use findByPrimarykey to get the reference of the user.
        user.password = req.body.password;
        await user.save(); //save to the same reference with the new updated value
        res.send({status:"success",message:"user data updated"});
    }
    catch(error)
    {
        res.send({status:"error",message:"user not updated"}); 
    }

}


//delete
module.exports.delete= async(req,res)=>
{

    try{
        let user= await userModel.findByPk(req.body.id); 
        //first we use findByPrimarykey to get the reference of the user.
        await user.destroy(); //save to the same reference with the new updated value
        res.send({status:"success",message:"user deleted"});
    }
    catch(error)
    {
        res.send({status:"error",message:"user not deleted"});
    }

}