let pro_user= null;

const red_btn =document.getElementById("button_movetored");
const blue_btn =document.getElementById("button_movetoblue");
const pink_btn =document.getElementById("button_movetopink");
const grey_btn =document.getElementById("button_movetogrey"); 
const input =document.getElementById("input_field"); 

const btn_adduser= document.getElementById("button_adduser"); 
const btn_deleteuser= document.getElementById("button_deleteuser"); 

const red =document.getElementById("reduser");
const pink =document.getElementById("pinkuser");
const blue =document.getElementById("blueuser");
const grey =document.getElementById("greyuser");

console.log(blue);




//when preforming an event we need a listener.

function adduser_function()
{
    
    if(pro_user == null )
    {
        // console.log(input_field.value);
        //pro_user declared globally
        pro_user =document.createElement('div'); //created a div container
        pro_user.innerHTML =input_field.value //stored the value from input filed to the div tag.
        //console.log(pro_user);
        
        //adding class to this div container
        pro_user.setAttribute("id","pro_user");
        input_field.disabled = true;
        btn_adduser.disabled=true;
        btn_deleteuser.disabled= false;
        red.append(pro_user);
        
    }
    

}


function delete_user_function()
{
    if(pro_user != null )
    {
        
        pro_user.remove();
        input_field.disabled = false;
        btn_adduser.disabled= false;
        btn_deleteuser.disabled= true;
        pro_user.value=" ";
        pro_user=null //to enter another user after deleting one.
    }
}
 


function movetored()
{
    if(pro_user != null )
    {
    red.append(pro_user);
    }
}
function movetoblue()
{
    if(pro_user != null )
    {
    blue.append(pro_user);
    }
}
function movetogrey()
{
    if(pro_user != null )
    {
    grey.append(pro_user);
    }
}
function movetopink()
{
    if(pro_user != null )
    {
    pink.append(pro_user);
    }
}


btn_adduser.addEventListener("click",adduser_function);
btn_deleteuser.addEventListener("click",delete_user_function);
blue_btn.addEventListener("click",movetoblue);
grey_btn.addEventListener("click",movetogrey);
pink_btn.addEventListener("click",movetopink);
red_btn.addEventListener("click",movetored);