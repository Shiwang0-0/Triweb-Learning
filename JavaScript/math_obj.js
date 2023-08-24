//MAX AND MIN
console.log("MAX AND MIN");

let max=Math.max(1,2,3,4,5,6,7,8,9)
console.log(max);

let min=Math.min(1,2,3,4,5,6,7,8,9)
console.log(min);


//RANDOM
console.log("RANDOM");
let random = Math.random(); //gives random value between [0-1)
console.log(random);

console.log("RANDOM ONE DIGIT");
random = Math.round(Math.random()*10,1); //PRECISION OF 1
console.log(random);

console.log("RANDOM TWO DIGIT");
random = Math.round(Math.random()*100,1); //PRECISION OF 1
console.log(random);


// round rounds off 0.9349834 --> 10 to avoid this use floor
console.log("RANDOM ONE DIGIT");
random = Math.floor(Math.random()*10,1); //PRECISION OF 1
console.log(random);




