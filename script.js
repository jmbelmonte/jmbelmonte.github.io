const username = prompt("Username?");
const password = prompt("Password?");

let greet;

// var checkUsername = username === "jm" ? "True" : "False";

const isUserValid = (username, password) => {
    if (username === "jm" && password === "123") {
        return `Welcome! Username: ${username} and Password: ${password}!`;
    } else {
        return `Wrong username and password!`;
    }
};

console.log(isUserValid(username, password));

/* if (username === "jm" && password === "123") {
    alert("Welcome to the system!");
} else {
    alert("Wrong username and password!");
} */



