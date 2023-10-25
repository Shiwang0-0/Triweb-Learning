//wait until one of the promise is fulfilled.

function one() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("function 1");
        }, 4000)
    })
}

function two() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("function 2");
        }, 1200)
    })
}

function three() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("function 3");
        }, 1500)
    })
}

Promise.race([one(), two(), three()])
    .then(results => {
        console.log(results);
    }).catch(error => {
        console.log(error);
    })