const arr=[1,2,3];
const newArr=arr; //does not copy the value,but create the reference.
console.log("Before:",arr,newArr);

arr[0]=5;
console.log("After:",arr,newArr); //both gets changed