const str1 = new String("hello"); 
console.log(str1);  //object

const str2 = String ("namaste");
console.log(str2);

const str3 = "byebye";
console.log(str3);


//String is considered as Object in JS.



// String Objects

const str4 ="hellobellomello";
console.log(str4.charAt(5)); //char at index 5.
console.log(str4.indexOf('l')); //index of first occurence of alphabet l.
console.log(str4.lastIndexOf('l')); //last index of first occurence of alphabet l.
if(str4.startsWith('he'))
{
    console.log("the string starts with he");
}
else
{
    console.log("the string does not starts with he");
}

if(str4.includes('bello'))
{
    console.log("bello is present in the string");
}



//concatination 
const str5=str4.concat(str2);
console.log(str5);


//split
const countries = String("india,china,nepal");
const countryarray =countries.split(',');
console.log(countryarray);


//slice
str6="randomtexthere"
console.log(str6.slice(3,5)); 


//substring
console.log(str6.substring(3,5));

//substr
console.log(str6.substr(3,5)); //reads 5 character after from index 3.

//replace
console.log(str6.replace("text","thought"));


//trim
str7="         a string with many   intial and trailing   spaces     ";
console.log(str7.trim());
