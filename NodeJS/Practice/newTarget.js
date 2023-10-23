function demo(x){
    if(new.target==undefined) // in case when not using new.
    {
    console.log("inside, but object not created");
    }
    else //then only the object is created
    {
        this.x=x;
        console.log("inside, object created");
    }
    
    
}

demo(7); // no object created
let X=new demo(6); //object created when using new.
console.log(X);