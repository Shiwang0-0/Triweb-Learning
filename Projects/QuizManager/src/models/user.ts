//includes schemas of collections
import mongoose from 'mongoose';

const schema = mongoose.Schema;


const userSchema =new schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            index:true //for fast searching(when needed to access the popular filed in the database)
        },
        password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true //includes createdat,updatedat field in the collection
    }
    );
    


const User=mongoose.model("User",userSchema); //creates a collection on the basis of userSchema 


export default User; //exports the schema created