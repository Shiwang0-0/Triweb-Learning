const arr=[1,2,3];
const newArr=Array.from(arr); 
console.log("Before:",arr,newArr);

arr[0]=5;
console.log("After:",arr,newArr); 