function something(string,name,age)
{
    console.log("string",string);
    console.log("name",name);
    console.log("age",age);
}
let uname="fgh";
let age=30;

something("student name is ' ' and age is ' ' ,",uname,age); //normal
something `student name is ${uname} and age is ${age}`