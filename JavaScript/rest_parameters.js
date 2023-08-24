function multiplearguments(multiplier , ...arg)
{
    arg.forEach(element => {
        console.log(multiplier*element);
    });
}

multiplearguments(2,3,4,5);