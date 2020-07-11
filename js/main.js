var x = document.getElementById("signUp");
var y = document.getElementById("signIn");
var z = document.getElementById("mybtn");
var m = document.getElementById("signUp_btn");
var n = document.getElementById("signIn_btn");

// Toggle Function 

function signIn(){
    x.style.left ="-600px";
    y.style.left ="120px";
    z.style.left ="0px";
}
function signUp(){
    y.style.left ="-600px";
    x.style.left ="120px";
    z.style.left ="130px";
}

m.disabled = true;
n.disabled =true;

// Validation 
// function isPasswordMatch() {
//     var password = document.getElementById("pwd").value;
//     var confirmPassword = document.getElementById("repwd").value;
     
//     if (password === confirmPassword) m.disabled = false;
    
//  }

 function isPasswordMatch() {
    var password = $("#pwd").val();
    var confirmPassword = $("#repwd").val();
    
    if (password === confirmPassword) m.disabled = false;
    }
 $(document).ready(function () {
    $("#repwd").keyup(isPasswordMatch);
    }); 
    