console.log("----------For Array---------");
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function deepCopy(src,dest){
    for(const key in src){
        // console.log(key);
        if(Array.isArray(src[key]))
        {
            dest[key]=[];
            deepCopy(src[key],dest[key]);
        }
        else if(typeof(src[key])=="object")
        {
            dest[key]={};
            deepCopy(src[key],dest[key]);
        }
        else
        {
            dest[key]=src[key];
        }
    }
    return dest;
}


const newArr=deepCopy(arr,[]);

console.log("Before:", arr, newArr);

arr[0][0] = 5; 

console.log("After:", arr, newArr);




console.log("----------For Object---------");
const obj = {
    a: {
        p: 1,
        q: 2,
    },
    b: [
        1, 2
    ]
}


function deepCopy(src,dest){
    for(const key in src){
        // console.log(key);
        if(Array.isArray(src[key]))
        {
            dest[key]=[];
            deepCopy(src[key],dest[key]);
        }
        else if(typeof(src[key])=="object")
        {
            dest[key]={};
            deepCopy(src[key],dest[key]);
        }
        else
        {
            dest[key]=src[key];
        }
    }
    return dest;
}



const newObj=deepCopy(obj,{});

console.log("Before:", obj, newObj);

obj.a.p = 5; //or obj["a"]["p]=5;

console.log("After:", obj, newObj);

