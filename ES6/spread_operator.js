//spread operator ...

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let combined_Arr=[...arr1,...arr2] //... takes out the element from arr1 and arr2 and then put them in the combined array.
console.log(combined_Arr);


console.log("-------------------------------------------");

let obj1={name:"abcde",age:30};
// let obj2=obj1;
// object is changed by reference and not copied
//to copy the object use spread operator.
let obj2={...obj1}; //actually obj1={name:"abcde",age:30};
console.log("before",obj1);
console.log("before",obj2);
obj1.name="pqrst";
console.log("after",obj1);
console.log("after",obj2);
