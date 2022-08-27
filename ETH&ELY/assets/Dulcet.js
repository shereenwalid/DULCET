function validate(){
var valid=true;
var first=document.getElementById("first");
var last=document.getElementById("last");
var user=document.getElementById("user");
var pass1=document.getElementById("pass1");
var pass2=document.getElementById("pass2");
var er=document.getElementById("er");
var email=document.getElementById("email");

if(email.value.indexOf("@")==-1||email.value.indexOf(".")==-1){
p1.style.color="red";
p2.style.color="white";
p3.style.color="white";
email.style.border="red";
valid=false;
}
else if(pass1.value.length<=5){
p2.style.color="red";
p3.style.color="white";
p1.style.color="white";
pass1.style.border="red";
valid=false;
}
else if (pass1.value!=pass2.value)

{
pass2.style.border="red";
p3.style.color="red";
p2.style.color="white";
p1.style.color="white";
valid=false;

}
else if (valid==true){
p2.style.color="white";
p1.style.color="white";
p3.style.color="white";
 localStorage.setItem('user', user.value);
 localStorage.setItem('pass2', pass2.value);
}
return valid;

}

function validate2() {

    // stored data from the register-form
    var storedName = localStorage.getItem('user');
    var storedPw = localStorage.getItem('pass2');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');
    var valid2=true;
    // check if stored data from register-form is equal to data from login form
    if(userName.value != storedName ) {
        u.style.color="red";
        p.style.color="white";
        valid2=false;
    }else if(userPw.value != storedPw) {
        p.style.color="red";
        u.style.color="white";
        valid2=false;
    }
else if(valid2==true){
p.style.color="white";
u.style.color="white";
}
return valid2;
}
