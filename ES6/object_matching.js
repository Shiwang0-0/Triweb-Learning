
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



function gets()
{
    let obj={
        ename:"abcde",
        salary:100,
        location:{
            city:"banglore"
        }

    }
    return obj;
}

// let {ename:empname,salary:empsalary,location:emplocation}=gets();
// console.log(empname,empsalary,emplocation);

//console.log(ename,salary); //not defined.

let {ename:empname,salary:empsalary,location:{city:empcity}}=gets();
console.log(empname,empsalary,empcity);

//Deep matching