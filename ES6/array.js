let arr=[1,2,3,4,5];

let keys=arr.keys();
console.log(keys); //Object [Array Iterator] {}

for (const e in arr) {
    console.log(e);
    console.log(arr[e]);
}

console.log("-------------------------------------");

//find
let arr1=[1,2,3,4,5];
let first_odd_no=arr.find(odd);

function odd(value,index,arr1) //function(currentValue, index, arr)
{
    return value%2!=0; //In JavaScript  the return statement can be used not only to specify the value that a function should return but also to control the flow of execution within the function by making conditional decisions.
}

console.log(first_odd_no);



console.log("-------------------------------------");

//find index
let arr2=[12,222,32,48,53];
let index_of_first_odd = arr2.findIndex((value,index,arr2)=>{
    return value%2!=0
});

console.log(index_of_first_odd);
