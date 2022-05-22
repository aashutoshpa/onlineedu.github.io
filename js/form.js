function open_form(){
    document.getElementById("form-container").style.display="block";
    // overflow: ;
    document.body.style.overflow = 'hidden';
}

function signup()
{
    document.getElementById("sign-btn").style.backgroundColor="red";
    document.getElementById("sign-btn").style.color="white";
    document.getElementById("login-btn").style.color="black";
    document.getElementById("login-btn").style.backgroundColor="white";
    document.getElementById("l-text").innerHTML="Sign up";
    document.getElementById("sign-up-form-container").style.zIndex="1";
}
function login(){
    document.getElementById("login-btn").style.backgroundColor="red";
    document.getElementById("login-btn").style.color="white";
    document.getElementById("sign-btn").style.color="black";
    document.getElementById("sign-btn").style.backgroundColor="white";
    document.getElementById("l-text").innerHTML="login";
    document.getElementById("sign-up-form-container").style.zIndex="-1";
}
function close_form()
{
    document.getElementById("form-container").style.display="none";
    document.body.style.overflow = 'auto';

}