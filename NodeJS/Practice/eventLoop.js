
console.log(1);
  
setTimeout(function(){ //This is a blocking Code,this is sent to the worker pool by the event loops,means the other code will process as it is and will not wait for this to complete.
    console.log(2);
}, 1000);
  
console.log(3); 