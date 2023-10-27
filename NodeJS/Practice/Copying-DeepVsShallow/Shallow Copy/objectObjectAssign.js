const obj={
    a:1,
    b:2,
    c:3
}

const newObj={};

Object.assign(newObj,obj);

console.log("Before:",obj,newObj);

obj.a=5;

console.log("After:",obj,newObj);