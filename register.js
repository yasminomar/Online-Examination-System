document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
var signUpBtn=document.getElementById("signUpBtn");
var password=document.getElementById("password");
var confirm=document.getElementById("confpassword");
var Fristname=document.getElementById("fname");
var Lastname=document.getElementById("lname");
var email=document.getElementById("email");
signUpBtn.addEventListener("click",function(){

    if(password.value!==confirm.value){
        confirm.value="";
        confirm.setAttribute("Placeholder","Try Again .");
        confirm.style.borderColor="red"
    }
    else if(password.value.length<8){
        password.value="";
        confirm.value="";
        password.setAttribute("Placeholder","Try Again .");
        confirm.setAttribute("Placeholder","Try Again .");
        password.style.borderColor="red"
        confirm.style.borderColor="red"
    }
    else if(isFinite(Fristname.value)){
        Fristname.value="";
        Fristname.setAttribute("Placeholder","Try Again .");
        Fristname.style.borderColor="red"

    }
    else if(isFinite(Lastname.value)){
        Lastname.value="";
        Lastname.setAttribute("Placeholder","Try Again .");
        Lastname.style.borderColor="red"

    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        email.value="";
        email.setAttribute("Placeholder","Try Again .");
        email.style.borderColor="red"

    }
    else{
        var user = {
            email: email.value,
            password: password.value,
            fname: Fristname.value,
            lname:Lastname.value,
        }
        var json = JSON.stringify(user);
        localStorage.setItem(email.value, json);
        console.log("user added");
        signUpBtn.innerText="Done";
        password.setAttribute("Placeholder","");
        email.setAttribute("Placeholder","");
        Fristname.setAttribute("Placeholder","");
        Lastname.setAttribute("Placeholder","");
        confirm.setAttribute("Placeholder","");
        password.style.borderColor="rgba(109, 93, 93, 0.4)"
        email.style.borderColor="rgba(109, 93, 93, 0.4)"
        Fristname.style.borderColor="rgba(109, 93, 93, 0.4)"
        Lastname.style.borderColor="rgba(109, 93, 93, 0.4)"
        confirm.style.borderColor="rgba(109, 93, 93, 0.4)"



        password.value="";
        confirm.value="";
        Lastname.value="";
        Fristname.value="";
        email.value="";


    }
})
var lemail=document.getElementById("lemail");
var lpassword=document.getElementById("lpassword");


var loginBtn=document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
    var myKey=lemail.value;
    if (localStorage.getItem(myKey) !== null) {
        var user=JSON.parse(window.localStorage.getItem(myKey));
        var upassword = user.password;
        if (lpassword.value !== upassword) {
            lpassword.value="";
            lemail.style.borderColor="rgba(109, 93, 93, 0.4)"
            lpassword.style.borderColor="red"
            lpassword.setAttribute("Placeholder","Try Again .");
        } 
        else {
            localStorage.setItem("email",myKey);
            window.location.replace("exam.html");
        }
    }
    else{
        lemail.value="";
        lemail.style.borderColor="red"
        lemail.setAttribute("Placeholder","You Don't have an account .");
    }

})
var forgotpass=document.getElementsByClassName("forgot-pass")[0];
forgotpass.addEventListener("click",function(){
    var myKey=lemail.value;
    if (localStorage.getItem(myKey) !== null) {
        var user=JSON.parse(window.localStorage.getItem(myKey));
        var upassword = user.password;
        lemail.style.borderColor="rgba(109, 93, 93, 0.4)"

        lpassword.setAttribute("Placeholder",upassword);

    }
    else{
        lpassword.setAttribute("Placeholder","You Don't have an account .");

    }

})