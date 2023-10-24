const outer=()=>{
    someVar=3;
    return (inner=()=>{
        return someVar; //someVar is declared in Outer function, but even innner function can access it and return its value.
    })
}

const xyz=outer(); //return innner function
console.log(xyz()); //calls inner function

console.log("----------------------------------------------");

const findPower=(power)=>{
    return((base)=>{
        return base**power;
    })
}

const cube=findPower(3);
const quad=findPower(4);
console.log(cube(2));
console.log(quad(2));