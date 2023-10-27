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

const newObj = JSON.parse(JSON.stringify(obj));

console.log("Before:", obj, newObj); 

obj.a.p = 5; 

console.log("After:", obj, newObj);