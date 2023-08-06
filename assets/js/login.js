function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById ("password").value;
    if ( email ==="manu@hotmail.com" && password ==="soyhermosa"){
        (window.location.href="admin.html")
    }else{
        console.log("dato malevolos");
    }
}