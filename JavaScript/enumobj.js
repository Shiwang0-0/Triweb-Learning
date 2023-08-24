let obj={uname:"shiii",address:"india",email:"abc@gmail.com"}

for (const key in obj) {
    console.log(`value on ${key} is ${obj[key]}`);
}


//access key only
let keys=Object.keys(obj); //makes an array of keys
console.log(keys);


//to print object keys using loops
for (const key of Object.keys(obj)) {
    console.log(key);
}



//to print object values using loops
for (const key of Object.values(obj)) {
    console.log(key);
}
