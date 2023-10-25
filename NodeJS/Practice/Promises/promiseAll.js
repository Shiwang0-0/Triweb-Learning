//when having multiple promises,
//wait->to resolve all
//and reject one

//promise.all(iterable) 
function one() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("function 1");
        }, 1000)
    })
}

function two() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("function 2");
        }, 1000)
    })
}

function three() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("function 3");
        }, 1000)
    })
}

Promise.all([one(), two(), three()])
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })