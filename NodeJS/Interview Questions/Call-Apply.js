// In Call we pass Arguments.
// In apply we pass the array.

function setProductDetails(productName,amt){
    this.productName=productName;   //this is actually student.productName=productName;
    this.amt=amt;   //this is actually student.amt=amt;
}


function students(sname,productName,amt){

    this.sname=sname;
    setProductDetails.call(this,productName,amt); //students this is passed in setProductDetails function.
}

const student2= new students("abc","laptop","789");
console.log(student2.sname,student2.productName,student2.amt);

console.log("--------------------------------------------------------------------------");



function setDetails(...marks)
{
    this.sub1=marks[0];
    this.sub2=marks[1];
    this.sub3=marks[2];
    this.sub4=marks[3];
} 

function student(sname,...marks){ //rest operaotr makes the marks an array;
    this.sname=sname;
    setDetails.apply(this,marks);
}

const s1=new student("xyz",77,45,36,90);
console.log(s1);








