const person={
    name:"abcde",
    id:56,
};


const xyz = Symbol('xyz');
person[xyz]="hidden"; //xyz added as an symbol key with value hidden


console.log(person[xyz]);
// person.id=5; //accidentally changed.
console.log(person);

console.log(Object.getOwnPropertyNames(person)); //xyz is not displayed
console.log(Object.getOwnPropertySymbols(person));
const pqr = Symbol('xyz');
console.log(person[pqr]); //undefined,we cannot even access the same symbol using another variable. 
//NO TWO SYMBOLS ARE SAME,even we have passed same name.
//A symbol can only be accessed by its own variable/key, we cannot create the same key again.



//GLOBAL SYMBOL (not hidden,can be accessed by any)
const abc=Symbol.for('abc');
person[abc]="not hidden";
console.log(person[abc]);

const mno=Symbol.for('abc');
console.log(person[abc]);


