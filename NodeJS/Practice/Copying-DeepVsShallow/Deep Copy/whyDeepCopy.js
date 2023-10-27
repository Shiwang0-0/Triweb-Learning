

console.log("----------For Array---------");
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const newArr = [...arr];
console.log("Before:", arr, newArr);

arr[0][0] = 5;
console.log("After:", arr, newArr);  //botharrays  are getting changed even after using spread operation


console.log("----------For Object---------");

const obj = {
    a: {
        p: 1,
        q: 2,
    },
    b: {
        x: 1,
        y: 2,
    }
}

const newObj = { ...obj };

console.log("Before:", obj, newObj);

obj.a.p = 5; //or obj["a"]["p]=5;

console.log("After:", obj, newObj);