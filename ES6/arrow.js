//arrow function has no (this).

function xyz()
{
    console.log(this); //display info of the normal function
}

console.log("outside",this);
xyz();




console.log("---------------------------------------------");



const xyzm = () =>
{
    console.log(this); //empty,therefore arrow function cannot be made constructor.
}
//no argument variable in arrow function
//new.target not present in arrow
console.log("outside",this);
xyzm();


//Lexical this,the this inside the arrow function is same as this outside the arrow function.


console.log("---------------------------------------------");


let arr=[1,2,3,4,5];
const arrmap=arr.map(element => element*element)
console.log(arrmap);


console.log("---------------------------------------------");

const retobj=(name,age) =>({name:name,age:age})
console.log(retobj("abcde",80)); 