document.querySelector("form").addEventListener("submit", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

function signin(event) {
    event.preventDefault();
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#user").value;

    for (var i=0; i<regdUsers.length; i++) {
        
        if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {
            alert("Login successful")
            window.location.href = "index.html";
        }
    }
}