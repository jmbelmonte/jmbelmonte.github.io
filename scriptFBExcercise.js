var database = [
    {
        username: "jm",
        password: "123"
    },
    {
        username: "jm2",
        password: "1234"
    },
    {
        username: "jm3",
        password: "1235"
    }
]

var newsfeed = [
    {
        username: "jm",
        timeline: "Learning JS!"
    },
    {
        username: "ayet",
        timeline: "Sewing"
    }
]

var inputUsername = prompt("What's you username?");
var inputPassword = prompt("What's you password?");

function isUserValid(username, password) {
    for (i=0; i < database.length; i++) {
        if (username === database[i].username &&
            password ===  database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username,password) === true)  {
                console.log(newsfeed);
    } else {
        alert("Sorry, your username and password is incorrect!");
    }
}

signIn(inputUsername,inputPassword);

