let student={
    sname:"xyz",
    mobile:789
}

let str=JSON.stringify(student);
console.log(str);
console.log(str.sname); //undefined because str is a string it wont have key value pair.

let obj=JSON.parse(str);
console.log(obj);
console.log(obj.sname);