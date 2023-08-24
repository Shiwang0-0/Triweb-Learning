
//DATES
console.log("DATES");
let date = "2023 08 19 12:34:23";
let dateobj = new Date(date); //date object created.
console.log(dateobj.getMonth());  //month starts with 0
console.log(dateobj.getFullYear());
console.log(dateobj.getHours());
console.log(dateobj.getMinutes());

dateobj.setHours(4);
console.log(dateobj.getHours());

console.log(dateobj);





console.log("-------------------------------");



//DIGITAL CLOCK 
console.log("DIGITAL CLOCK");
(function gettime()
{
    let dt = new Date(); //node server time is fetched.
    // console.log(dt);
    // dt.setHours(24); on hour 24th the hour becomes 0.
    let hour= dt.getHours();
    let min= dt.getMinutes();
    let sec= dt.getSeconds();
    let hr12=hour>12? hour-12 : hour;
    let hr =hr12<10? `0${hr12}` : hr12;
    if(hr==0)
    {
        hr=12;
    }
    let mt =min<10? `0${min}` : min;
    let st =sec<10? `0${sec}` : sec;
    let zone =hour<12? "AM" : "PM" ;
    console.log(`${hr}:${mt}:${st} ${zone}`);
})() //self executed function .

