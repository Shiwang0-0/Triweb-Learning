// SHORT-CIRCUIT EXPRESSION
console.log("SHORT-CIRCUIT EXPRESSION");
let a=6;
let b=4;
if(a>5 || b++) // b will not be incremented.
{
    console.log(a,b);
}

if(a>8 || b++) // b will be incremented
{
    console.log(a,b);
}

if(a++ && b>=5)
{
    console.log(a,b);
}



console.log("-----------------------------------");


console.log("IN OPERATOR");
// IN OPERATOR
let obj ={username : "shiwang" ,userid : 10}

if('username' in obj)
{
    console.log(`yes user exist and it is ${obj.username}`);
}


console.log("-----------------------------------");




//INSTANCE OF OPERATOR
 console.log("INSTANCE OF OPERATOR");
function xyz()
{
    this.z=5;
}

let y=new(xyz);
let objs;
//console.log(y);
console.log(y instanceof xyz); //true
console.log(objs instanceof xyz); //false




console.log("-----------------------------------");


console.log("THIS OPERATOR");
//THIS OPERATOR

function xyz()
{
    this.z=5; //points to the specific object.
}

let i=new(xyz); //creates new memory
let j=new(xyz);   
console.log(i);
console.log(i.z);
i.z=10;
console.log(i.z);
console.log(j.z); //for object j the value of z remains same.


