function printdata()
{
    console.log(name,age);
}

printdata({name:"abcde",age:40});





function printdata({name:ename,age:eage})
{
    console.log(ename,eage);
}

printdata({name:"abcde",age:40});