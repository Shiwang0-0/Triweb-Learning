//shallow copy refers to copying only one level(means no copying nested arrays,objects).

console.log("----------SHALLOW COPY USING SPREAD OPERATION---------");

console.log("----------For Array---------");
const arr=[1,2,3];
const newArr=[...arr]; //copy the value into newArr.
console.log("Before:",arr,newArr);

arr[0]=5;
console.log("After:",arr,newArr); //both gets changed


console.log("----------For Object---------");

const obj={
    a:1,
    b:2,
    c:3
}

const newObj={...obj};

console.log("Before:",obj,newObj);

obj.a=5;// obj["a"]=5

console.log("After:",obj,newObj);