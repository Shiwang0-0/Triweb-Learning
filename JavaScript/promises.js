//promise represents the failure or success of a asynchronous operation.

function validate(name){
    //if completed flow goes to resolve else reject.
    return new Promise((resolve, reject)=>{ //returns a promise
        if(name == "abcde")
        {
            resolve("Yes validated");
        }
        else
        {
            reject("Not validated ");
        }
    });
}
console.log(validate("abcde"));// Promise { 'Yes validated' }
// validate("abcdef"); //error comes in case of rejected case unhandledpromiserejectionwarning

validate("abcdef").then( //runs then if true
    (result)=>{console.log(result);}
    )
.catch( //runs catch if rejected
    (err)=>{console.log(err)}
    )


    // unhandledpromiserejectionwarning :comes when promise goes to rejection bloack.so we need catch function to handle.