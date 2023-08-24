// NUMBERS
console.log("NUMBERS");
let a=0b110; //binary
console.log(a);

a=0o142; //octal
console.log(a);

a=0xA1; //hexadecimal
console.log(a);

a=1e4; //exponential
console.log(a);




//Avoid using number representation without  "b" or "x" or "o" because of their unpredictable nature.

console.log("---------------------------------");


// NUMBER IS AN OBJECT
console.log("NUMBER OBJECT");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);



let p= 10/'r';
console.log(p); //NaN
if(p != NaN)
{
    console.log("a number");  // UNEXPECTED BEHAVIOUR
}
else
{
    console.log("not a number");
}

 
if(!(Number.isNaN(p)))
{
    console.log("a number");    //CORRECT
}
else
{
    console.log("not a number");
}



console.log("---------------------------------");


//IS SAFE 
console.log("IS SAFE");
let q=+84357239859028359028;
if((Number.isSafeInteger(q)))
{
    console.log("safe");
}
else
{
    console.log("not safe");
}

q=+843572398590;
if((Number.isSafeInteger(q)))
{
    console.log("safe");
}
else
{
    console.log("not safe");
}



console.log("---------------------------------");



// PARSING
console.log("PARSING");
let n1='1';
console.log(parseInt(n1));
let n2='45.8';
console.log(parseFloat(n2));


console.log("---------------------------------");

//TO EXPONENTIAL
console.log("TO EXPONENTIAL");
let num=6700000;
console.log(num.toExponential());



console.log("---------------------------------");


//TO FIXED (fixed point notation)
console.log("TO FIXED");
 num=5.634535;
console.log(num.toFixed(3)); //round off and fixed to 3 digit.



