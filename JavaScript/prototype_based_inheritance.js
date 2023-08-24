//A prototype based language such as JS has objects, a prototype based language has the notion of a prototypical obj.any object can inherit all the properties from its previous parent object and additionally can specify its own properties(which is not possible in C++,java class concept) .



function emp(mobile)
{
    this.dept="none";
    this.mobile=mobile;
}

function manager(name)
{
    emp.call(this); //it makes emp a parent of manager.All value in manager gets attached to emp.
    this.name=name;
}

manager.prototype= Object.create(emp.prototype); //manager abcde prototype is of now emp type
manager.prototype.constructor = manager ; 


let abcde = new manager("abcde");
console.log(abcde);
console.log(abcde.__proto__); 
console.log(abcde.__proto__.__proto__); //blank because emp is not inheriting anyone.
abcde.email="pqr@gmail.com";
console.log(abcde);