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

Promise.allSettled([one(), two(), three()])
    .then(results => {
        console.log(results);
    }).catch(error => {
        console.log(error);
    })