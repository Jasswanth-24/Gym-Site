function data() {
    var nm = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var no = document.getElementById("number").value;
    var msg = document.getElementById("message").value;

    var userInput = {
        name: nm,
        email: mail,
        number: no,
        message: msg
    }
    // Retrieve existing data from localStorage
    //get the item from string into object 
    var existdata = JSON.parse(localStorage.getItem("userinput")) || []

    // Append new data to existing data
    existdata.push(userInput)

    // Retrieve existing data from localStorage
    //set the item to object from string in the local storage
    localStorage.setItem("userinput", JSON.stringify(existdata))

    document.getElementById("form2").reset();

    alpha = /^[A-Za-z]+$/
    email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    number = /^([0-9]{10})+$/

    if (nm == "") {
        alert("please fill the name fields");
    }
    else if (!alpha.test(nm)) {
        alert("use only alphabets");
    }
    if (mail == "") {
        alert("enter the email");
    }
    else if (!email.test(mail)) {
        alert("use a correct email");
    }
    if (no == "") {
        alert("please fill the number fields");
    }
    else if (!number.test(no)) {
        alert("Please provide a 10-digit number");
    }
    else {
        window.location = "Gym submitpage.html"
        alert("submitted successfully")
    }
}

function add() {
    let signupBtn = document.getElementById("signup")
    let signinBtn = document.getElementById("signin")
    let namefield = document.getElementById("name").parentNode;
    let msgfield = document.getElementById("message").parentNode;
    let title = document.getElementById("title")

    signinBtn.onclick = function () {
        namefield.style.maxHeight = "none";
        msgfield.style.maxHeight = "none";
        title.innerHTML = "Member Access"
        title.style.color = "#0bfa2b"
        signupBtn.classList.add("disable")
        signinBtn.classList.remove("disable")
        // signupBtn.disabled = true;
        // signinBtn.disabled = false;
    }

    signupBtn.onclick = function () {
        namefield.style.maxHeight = "block";
        msgfield.style.maxHeight = "block";
        title.innerHTML = "Register as a Member"
        title.style.color = "#0bfa2b"
        signupBtn.classList.remove("disable")
        signinBtn.classList.add("disable")
        // signinBtn.disabled = false;
        // signupBtn.disabled = true;
    }
}
$(document).ready(function () {

    $("#signin  ").click(function () {

        $("main").hide();

    });

    $("#signup").click(function () {

        $("main").show();

    });

});
