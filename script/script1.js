function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== "jordan@123" && password==="admin123"){
        window.location.assign("register.html");
        alert("Login Successfully ");
    }
    else{
        alert("Invalid Informatio");
    }
}