const arr=[1,2,3];
const newArr=[]; 

Object.assign(newArr,arr); //object.assign(to,from);

console.log("Before:",arr,newArr);

arr[0]=5;
console.log("After:",arr,newArr); 