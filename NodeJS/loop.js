const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For of loop
for (let i of arr) 
{
  if (i % 2 === 0) 
    {
        console.log(`${i} is even number`);
    } 
    else 
    {
        console.log(`${i} is odd number`);
    }
}

//For in loop
console.log("for in loop");
for (let i in arr) 
{
  if (arr[i] % 2 === 0) 
  {
    console.log(`${arr[i]} is even number`);
  } 
  else 
  {
    console.log(`${arr[i]} is odd number`);
  }
}

//While loop
console.log("whle loop");
let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}