let str="hii \n bye"
console.log(str == "hii \n bye"); //true
console.log(str == "hii \\n bye");//false
console.log(String.raw`hii \n bye`=="hii \\n bye"); //true