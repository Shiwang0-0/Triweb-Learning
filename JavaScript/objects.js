
let obj={uname:"shiwang",address:"xyz"}
// console.log(obj);
obj.uname="0-0";
console.log(obj);

console.log(obj.altaddress); //undefined (make sure to make it null);
// console.log(obj);
obj.altaddress=null;
// console.log(obj.altaddress);
console.log(obj);

//dot notation
console.log(obj.uname); 

//bracket notation
console.log(obj['uname']); 


const y="key";
obj.y="val1"; //(will assign key as y and )
console.log(obj);


//making a key
const x="key";
obj[x]="val1"; //(variabke x's value is used as a key);
console.log(obj);
console.log(obj.key);
console.log(obj.x); //undefined
console.log(obj[x]);




//unassigned properties of an obj are undefined (not null)
//does not follow insertion order ,unlike map.