const marks=[34,65,23,89,45,88];

// let mark1=marks[0];
// let mark2=marks[1];
// let mark3=marks[2];

// console.log(mark1,mark2,mark3);


//object destructuring
let [mark1,mark2,mark3,...othermarks]=marks;  //value of array marks is keopt in different varibale using object destructuring
console.log(mark1,mark2,mark3,othermarks);



//Object
const student={
    'uname':"xyz",
    'mobile':"3493",
    'age':"45"
};

const {uname,age}=student;
console.log(uname,age);