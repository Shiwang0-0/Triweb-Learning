function add(callby,a,b){
    console.log(callby,a+b);
}

setImmediate(()=>{
    add("set immediate",1,9);
}) //call back register with check queue.

setTimeout(()=>{
    add("settimeout",8,3);
},454) //call back register with timer queue.

setTimeout(()=>{
    add("setTimeout with 0 time",2,3);
},0) //call back register with timer queue.


process.nextTick(()=>{
    add("nexttick",5,4);
}) //puts its callback before the second event loop.
// runs after the current code(which is being executed right now) but before the timer and I/O events.

add("direct",5,6);