function failure(err)
{
    console.log("failed",err);
}

function success(result)
{
    console.log("success",result);
}

function validate(name,yessuccess,nosuccess)
{
    if(name=="abcde")
    {
        yessuccess("name is validated");
    }

    else
    {
        nosuccess("not matched");
    }
}

validate("abcdef",success,failure); //will get passed.