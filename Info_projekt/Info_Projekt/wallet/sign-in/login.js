function login() {
    passoword = document.getElementById("password").value
    username = document.getElementById("username").value
    if(passoword == "123" && username == "alsfaßer") {
        window.location.href = "/Info_projekt/wallet/sign-in/success/success.html"
        localStorage.setItem("authorization", "true");
    }

    else {
        document.getElementById("error-text").innerHTML = "Falsche Logindaten"
    }
}

document.getElementById("login").onclick = login