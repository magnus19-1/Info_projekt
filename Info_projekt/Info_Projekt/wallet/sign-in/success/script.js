let authorization = localStorage.getItem("authorization");

if (authorization == "true") {
    localStorage.setItem("authorization", "false")
    console.log("true")
    document.getElementById("content").style.visibility = "visible";
}

else {
    document.getElementById("no-authorization-text").style.visibility = "visible";
    console.log("false")
}