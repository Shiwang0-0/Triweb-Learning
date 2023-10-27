const arr=[1,2,3];
const newArr=arr.slice(); //slicing whole array and making a copy into newArr.
console.log("Before:",arr,newArr);

arr[0]=5;
console.log("After:",arr,newArr); 