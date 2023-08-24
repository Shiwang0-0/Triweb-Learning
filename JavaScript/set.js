//sets have unique elements in it.

let set = new Set()
set.add(34);
set.add(45);
set.add(0);
set.add(45); // will not be added in set as it is previously present.(also the size of set will remain same).
console.log(set);

if(set.has(45))
{
    console.log("yes set has 45");
}
if(set.has(5))
{
    console.log("does not have 5");
}

console.log(`the size of set is ${set.size}`);

set.delete(45);
console.log(set); //size will be change on deleting the element.


//printing set using loops
let i=0;
for (const element of set) {
    console.log("element "+ i +" is "+ element);
    i++;  
}




//array to set
let arr=[1,2,3,4,5,5,4,3,2,1];
console.log(arr);

let setfromarray = new Set(arr); //both array and set are of same datatype but set will not allow duplicated elements of array in it.
console.log(setfromarray);



//set to array
let arrayfromset = Array.from(setfromarray);
console.log(arrayfromset); //as set is converted to array , elements can be pushed inside the array.
arrayfromset.push(9,3);
console.log(arrayfromset);




//set to array using spread operation
let arrspread= [...setfromarray];
console.log(arrspread); //as set is converted to array , elements can be pushed inside the array.



//deleting elements in a set.
// UNLIKE array, sets can delete elements on the basis of their values (because no two va;ues are same).

let myset = new Set([2,3,4,5,6]);
myset.delete(2,4); //deletes only one element.2 is deleted in this case.
console.log(myset);






//weak sets
let wset=new WeakSet([{obj1:"val1"},{obj2:"val2"}]);
console.log(wset); //works in browser's console