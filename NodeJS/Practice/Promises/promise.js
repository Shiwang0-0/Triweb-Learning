function fun1(){
    return("function 1");
}
// function fun2(){
//     setTimeout(()=>{
//         console.log("should be 2nd");
//         return("function 2");
//     },1000)
// }

function fun2(){
    return new Promise((res,rej)=>{
        // rej("promise is rejected");
        setTimeout(()=>{
            console.log("should be 2nd");
            res("function 2"); //returns resolve.
        },1000)
    })
}


function fun3(){
    return("function 3");
}

const res1=fun1();
console.log(res1);
// const res2=fun2();
// console.log(res2); //value is not read
// const res3=fun3();
// console.log(res3);

fun2()
    .then(result=>{
        console.log(result);
        const res3=fun3(); //after result i.e function 2 , fun3 will be kept in then block to execute it after function 2.
        console.log(res3);
    })
    .catch(error=>{
        console.log(error);
    })

