//Wait until one of the promise is fulfilled.
//If all promises are rejected,error will be generated.
function one() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("function 1");
        }, 1000)
    })
}

function two() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("function 2");
        }, 2000)
    })
}

function three() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("function 3");
        }, 1500)
    })
}

Promise.any([one(), two(), three()])
    .then(results => {
        console.log(results);
    }).catch(error => {
        console.log(error);
    })