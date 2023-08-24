
//NORMAL DECLARATION
function cube(num)
{
    return num**3;
}

console.log(cube(5));


//USING ARROW FUNCTION
const cubes = (num) => (num**3);

console.log(cubes(5));
console.log(cubes(8));