let obj ={name:"abcde",id:45};
obj.display=function()
{
    console.log(`${this.name} has id ${this.id}`);
}

console.log(obj.prototype); //undefined
// obj.prototype.salary = 500;
// console.log(obj.prototype.salary); //cannot set properties of undefined

console.log(obj.__proto__); //[Object: null prototype] {}

let obj1=Object.create(obj);
obj1.name="pqrst";
// obj1.display=function()
// {
//     console.log(`${this.name} has id ${this.id}`);
// } intead of defining function here we can define it in its protoype i.e parent of all which is obj in this case.

//to add from here only 
obj1.__proto__.display=function()
{
    console.log(`${this.name} has id ${this.id}`);
}
obj1.display();
console.log(obj1.__proto__); //obj1 is made up of obj so obj is its prototype. (inherited).

let obj2=Object.create(obj1); //obj2 is made up of obj1 so obj1 is its prototype. (inherited).
obj2.name="klmno";
obj2.id=77; // no significance beacause its parent i.e obj1 has no key as id.
console.log(obj2.__proto__);
console.log(obj2.__proto__.name);
console.log(obj2.__proto__.id); //prints its id only (because id is not deifined in its parent).first parent is given preference.
obj2.display(); //will work

