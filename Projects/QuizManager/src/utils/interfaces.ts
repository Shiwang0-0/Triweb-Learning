//creating response interface which will act as a template to send responses
interface returnResponse{
    status:"success"|"error",
    message:String,
    data:[] | {}
}

export {returnResponse}