const addhello =uname=>uname+" hello";
addhello("xyz");
console.log(addhello("xyz"));


const isthis=()=>{
    console.log(this);  //this inside arrow function meant nothing, it actually referes to the object outside of the arrow function only.
}
console.log(this);
isthis();