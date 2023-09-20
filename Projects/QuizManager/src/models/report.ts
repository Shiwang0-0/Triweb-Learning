//includes schemas of collections
import mongoose from 'mongoose';

const schema = mongoose.Schema;


const reportSchema =new schema(
    {
        userId:{
            type:mongoose.Types.ObjectId,
            required:true
        },
        quizId:{
            type:mongoose.Types.ObjectId,
            required:true,
        },
        score:{
            type:Number,
            required:true
        },
        total:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true //includes createdat,updatedat field in the collection
    }
    );
    


const Report=mongoose.model("Report",reportSchema); //creates a collection on the basis of userSchema ,Results is name of the collection.


export default Report; //exports the schema created