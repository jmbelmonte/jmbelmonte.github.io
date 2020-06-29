(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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




},{}]},{},[1]);
