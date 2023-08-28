const a=7;
console.log(a);

// a=6;
// console.log(b); //TypeError: Assignment to constant variable.

//7 is printed because JS is interpreted.

const obj={name: "abcde",age:7};
console.log(obj);

//  obj={name: "ab",age:8}; //TypeError: Assignment to constant variable.
// console.log(obj);
//obj is constant not its value.

//to change content value of obj 
obj.name="pqrst";
console.log(obj);