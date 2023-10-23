function *gen(index)
{
    while(index<5)
    {
        yield index; //returns the value(wihtout exiting the function) and the status of generator function wheter it is completed or not
        index++;
    }
}

let it=gen(0);
console.log(it.next())
console.log(it.next().value)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next().done)
