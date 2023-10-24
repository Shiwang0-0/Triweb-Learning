const getUser=(req,res)=>{
    res.send("user found");
}

const postUser=(req,res)=>{
    res.send("user found-post req");
}


module.exports.getUser=getUser;
module.exports.postUser=postUser;