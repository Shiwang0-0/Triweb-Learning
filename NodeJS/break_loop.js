let marks = [1,3,13,10,8,4];
let isBreak = true;

for (let i in marks) {
  if (marks[i] % 5 === 0) {
    isBreak = false;
    break;
  }
  console.log(marks[i]);
}

if (isBreak)
{
    console.log("Loop completed");
} 
else 
{
    console.log("Loop breaked");
}