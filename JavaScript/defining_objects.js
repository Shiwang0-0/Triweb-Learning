let obj =
    {
        name:"abcde",
        display:function(salary)
        {
            console.log(`${obj.name} has salary ${salary}`);
        },
        printage(age)
        { 
            console.log(`${obj.name} has age ${age}`);
        }
    }

    obj.display(10);
    obj.printage(20);