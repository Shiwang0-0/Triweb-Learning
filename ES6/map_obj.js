//ES6 allows to make an object as a key.

const st1={ename:"abcde",eage:33};
const st2={ename:"abutrte",eage:56};

const stmap=new Map();
stmap.set(st1,"good student");
stmap.set(st2,"not good student");
console.log(stmap);