let obj={name:"shi" , id:50}
console.log(obj);


//using function

function emp(name,salary,age)
{
    //this points to the current object.
    this.name=name;
    this.salary=salary;
    this.age=age;
}

let objfun1 = new emp("qwert",9,2); //memory allocated
let objfun2 = new emp("asdfg",5,30); //memory allocated
console.log(objfun1);
console.log(objfun2);




let obj1={name:"shi" , id:50}
let obj2=obj1;
obj2.name="wang";
obj2.id=100;
console.log(obj1);
console.log(obj2); //both prints same value means obj 1 and obj 2 are interconnected (or pointed).





let object1={name:"shi" , id:50,
            display:function()
            {
                console.log(this.name ,this.id); //points to that object.
            }
            }

object1.display();
let object2 =Object.create(object1);
console.log(object2); //will display noting because it makes a prototype of the object and even it copy the protoype of the function meaning the other object can also use the function and create method DOES NOT copies its values to the other object.
object2.name="abcde";
object2.id=77;
object1.display(); // values of 1st object remain intact.
object2.display(); //display function will work in object2 also.




//indexing object properties
//if you initaily define a property by its name then you must refer to it by using name only.if you initaily define a property by its index then you must refer to it by using index only.
object5={}
object5.name="abcde";
object5[1]=4;
console.log(object5.name);
// console.log(object5.1); //not allowed
// console.log(object5.[name]); //not allowed
console.log(object5[1]);