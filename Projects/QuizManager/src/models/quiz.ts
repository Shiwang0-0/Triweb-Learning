//includes schemas of collections
import mongoose from 'mongoose';

const schema = mongoose.Schema;

 
const quizSchema =new schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        questionsList:[
            {
                questionNumber:{
                    type:Number
                },
                question:String,
                options:{
                 } 
            }
        ],
        answers:{ },
        createdBy:{
            type:mongoose.Types.ObjectId,  // a unique id for every object,stores the String formatted object id in form of an object.
            required:true
        },
        isPublished:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true //includes createdat,updatedat field in the collection
    }
    );
    


const Quiz=mongoose.model("Quiz",quizSchema); //creates a collection on the basis of quizSchema 


export default Quiz; //exports the schema created