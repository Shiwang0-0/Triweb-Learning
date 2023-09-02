const dbase = require('../util/database');


module.exports.insert= async (userdata)=>{
    // console.log(userdata);
    // console.log(userdata.name);

    // let query="INSERT INTO `users` (`id`, `name`, `Email`, `Password`) VALUES (?,?,?,?);"; 
    // dbase.execute(query,[userdata.name,userdata.email,userdata.mobile]); 
    

    
    let id=0;
    try{
        let query="INSERT INTO `users` ( `name`, `email`, `password`) VALUES ( ? , ? , ? );"; 
        let result =await dbase.execute(query,[userdata.name,userdata.email,userdata.password]); 
        id=result[0].insertId;
        console.log(id);
    }
    catch(error){
        console.log(error);
    }   
    return id;
}



module.exports.get= async (userdata)=>{
    let retdata='';
    try{
        let query = "SELECT * FROM `users` WHERE id=?";
        let result = await dbase.execute(query,[userdata.id]);
        retdata=result[0][0];
        console.log(retdata);
    }catch(error){
        console.log(error);
    }
    return retdata;
}
 

module.exports.update= async (userdata)=>{
    try{
        let query = "UPDATE `users` SET `password` = ? WHERE id=?";
        let result = await dbase.execute(query,[userdata.password ,userdata.id]);
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}



module.exports.delete= async (userdata)=>{

  
  
    try{
        let query = "DELETE FROM `users` WHERE id=?";
        let result = await dbase.execute(query,[userdata.id]);
        return true;
    }catch(error){
        console.log(error);
        return false;
    }

}
    //inbuilt execute,executes the query created.

    //dont send hardcore values,send instead question marks.
    //This protect use from SQL injection.

    //A connectivity is required between SQL and Node.