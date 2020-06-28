var btnClick = document.getElementsByTagName("button")[0];

var clickCount = 0;

/* btnClick.addEventListener("click", function () {
    console.log("Click counts: " + clickCount++);    
}) */


function printLines() {
    var cnt = 100;

    for (i=0; i < cnt; i++) {
        console.log("Count: " + i);
    }
}

var userInput = document.getElementById("userinput");
var ul = document.querySelector("ul");

function getUserInputLength() {
    return userInput.value.length;
}

function createElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);    
    userInput.value = "";
}

function addToList() {
    if (getUserInputLength() > 0) {
        createElement();        
    }        
}

function addToListKey(event) {
    if (getUserInputLength() > 0) {
        if (getUserInputLength() > 0 && event.keyCode === 13) {
            createElement();
        }     
    }        
}

btnClick.addEventListener("click", addToList);
userInput.addEventListener("keypress", addToListKey);
