//try amount
var tryAmount = 3;
//body
var mainPart = id("mainPart");
var buttonPlace = id("buttonPlace");
//function to get element by id
function id(idLocate) {
    return document.getElementById(idLocate);
}
function press() {
    var nameInput = id("name");
    var name = nameInput.value;
    var display = id("display");
    var press = id("press");
    //conditioning
    if (name.toLowerCase().trim() == "nabil") {//change temporary
        display.innerHTML = "Welcome " + name;
        nameInput.setAttribute("placeholder", "enter password");
        nameInput.setAttribute("type", "password");
        display.textContent = "waiting for password...";
        //change the function to secondPress
        nameInput.value = "";
        press.setAttribute("onclick", "secondPress()");
    } else {
        display.innerHTML = "You are not admin";
        nameInput.value = "";
    }
}
function secondPress() {
    var password = id("name");
    var display = id("display");
    var press = id("press");
    var text = document.createElement("p");
    text.setAttribute("id", "text");
    //conditioning
    if (tryAmount == 0) {
        display.textContent = "You are blocked";
        password.remove();
        press.remove();
    }
    else if (password.value.trim().toLowerCase() == "keren") {//change temporary
        display.textContent = "";
        password.remove();
        press.remove();
        text.innerHTML = "Try my <b>new project.</b> this is a <i>password generator</i> that build with <b>JavaScript.</b>";
        mainPart.appendChild(text);
        passTrue();
    } else {
        display.textContent = "wrong, " + tryAmount + " tries left";
        password.value = "";
        tryAmount--;
    }

}
function passTrue() {
    //declaration
    var createPass = document.createElement("button");
    //createPass attribute
    createPass.setAttribute("id", "createPass");
    createPass.setAttribute("onclick", "generatePassword()");
    //set text
    createPass.textContent = "generate password";
    //get length input
    var getLength = document.createElement("input");
    getLength.setAttribute("id", "getLength");
    getLength.type = "number";
    getLength.placeholder = "password length";
    //append
    buttonPlace.appendChild(getLength);
    buttonPlace.appendChild(createPass);
    //display 1
    var textInPass = document.createElement("p");
    textInPass.id = "textInPass";//####----
    textInPass.textContent = "";
    buttonPlace.appendChild(textInPass);
    //display 2
    var display = document.createElement("p");
    display.id = "passDisplay";//####----
    display.textContent = "";
    buttonPlace.appendChild(display);  
}
function generatePassword() {
    var getLength = id("getLength");
    var length = getLength.value;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i < length; i++) {
        let randomPass = Math.floor(Math.random()* chars.length);
        password += chars[randomPass];
    }
    // Display the generated password
    var display = id("passDisplay");
    var textInPass = id("textInPass");
    textInPass.textContent = "your password is: ";
    display.textContent =  password;
}