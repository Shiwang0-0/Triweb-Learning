//call provides new value to the function or the method.
//inheritance can be done.

function student(sname){
    this.sname=sname;
}

const newStudent=new student("xyz");
console.log(newStudent.sname);

console.log("------------------------------------------");

// Normally

console.log("NORMALLLY");
function student(sname,productName,amt){
    this.sname=sname;
    this.productName=productName;
    this.amt=amt;
}

const student1= new student("abc","laptop","789");
console.log(student1.sname,student1.productName,student1.amt);


console.log("------------------------------------------");

//call
console.log("USING CALL");
function setProductDetails(productName,amt){
    this.productName=productName;   //this is actually student.productName=productName;
    this.amt=amt;   //this is actually student.amt=amt;
}


function student(sname,productName,amt){

    this.sname=sname;
    setProductDetails.call(this,productName,amt); //students this is passed in setProductDetails function.
}

const student2= new student("abc","laptop","789");
console.log(student2.sname,student2.productName,student2.amt);