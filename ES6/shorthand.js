let name="abcde";
let age=30;

let student1={
    name:name,
    age:age,
}
console.log(student1);

let student2={
    name, //shorthand,if key and value are same then shorthand can be used.
    age, 
}
console.log(student2);


console.log("---------------------------------------------------");

//computed property name
//make value of a variable as a key in the object.
function func()
{
    return "_this_is_func_key";
}
let key="newkey";
let obj={
    name:"pqr",
    [key]:"yes",
    [key+1]:"no", 
    [key + func()]:"yes" 
}
console.log(obj);


console.log("---------------------------------------------------");

let obj1={
    demo : function()
    {
        return 5;    
    } 
}
console.log(obj1.demo());



//shorthand of accessing object
let obj2={
    demo()
    {
        return 5;    
    } 
}
console.log(obj2.demo());


console.log("---------------------------------------------------");


function get()
{
    let student={
        age:"30",
        name:"45",
        course:"btech",
    }
    return student;
}

let value=get();
console.log(value);
value= {age,name,course}=get();
console.log(age,name,course);