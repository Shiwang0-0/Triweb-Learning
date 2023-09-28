var firstName =document.getElementById("first_name");
var lastName =document.getElementById("last_name");
var email =document.getElementById("client_email");
var contact =document.getElementById("contact");

firstName.onkeyup=function()
{
    var lowerCase = /[a-z]/g; //regex to search lower case alphabets in the name field.
    var upperCase = /[A-Z]/g;
    if(firstName.value.match(lowerCase) && !firstName.value.match(upperCase)) {  
        console.log("upper case required");
    }
    if(!firstName.value.match(lowerCase) && firstName.value.match(upperCase)) {  
        console.log("lower case required");
    } 
}

lastName.onkeyup=function()
{
    var lowerCase = /[a-z]/g; //regex to search lower case alphabets in the name field.
    var upperCase = /[A-Z]/g;
    if(lastName.value.match(lowerCase) && !lastName.value.match(upperCase)) {  
        console.log("upper case required");
    }
    if(!lastName.value.match(lowerCase) && lastName.value.match(upperCase)) {  
        console.log("lower case required");
    } 
}


var validRegex = /@[a-zA-Z0-9-]/;
email.onkeyup=function()
{
    if(email.value.match(validRegex))
    {
        console.log("valid email");
    }
    else
    {
        console.log("invalid email");
    }
}

var validphone = /^[0-9]{1,11}$/
contact.onkeyup=function()
{
    if(contact.value.match(validphone))
    {
        console.log("valid contact");
    }
    else
    {
        console.log("invalid contact");
    }
}