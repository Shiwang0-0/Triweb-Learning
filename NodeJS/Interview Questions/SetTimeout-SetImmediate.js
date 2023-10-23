function add(callby,a,b){
    console.log(callby,a+b);
}

setImmediate(()=>{
    add("set immediate",1,9);
}) //call back register with check queue.

setTimeout(()=>{
    add("settimeout",8,3);
},4543) //call back register with timer queue.

add("direct",5,6);