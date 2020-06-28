function checkAgeToDrive (age) {
    //var numAge = Number(age);
    if (age <= 18) {
        return"Sorry, you are too yound to drive this car. Powering off..";
    } else if (age === 19) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Powering On. Enjoy the ride!";
    }
}

//var age = prompt("What's your age?");
//alert(checkAgeToDrive(Number(age))); 

var list = ["apple", "banana", "orange"];

var list2 = [
    ["red", "green", "pink"],
    ["soft", "hard", "harder"]    
];

var listOfPerson = [
    {
        age: 31,
        height: "5'6"
    },
    {
        age: 27,
        height: "5'1"
    },
    
]

var person = {
    firstName: "John",
    lastName: "Belmonte",
    birthDate: "08/11/1988",
    homeAddress: "Munoz, NE",
    skills: ["Play Basketball", "Programming" ,"Dancing"],
    sayAThing: function sayAThing () {
        console.log("Okay let's go!");
    }
};

var user = {
    username: "jm",
    password: "123"
};

var database = [
    {
        username: "jm",
        password: "123"
    }
]

var newsfeed = [
    {
        username: "jm",
        timeline: "Testing javascript!"
    },
    {
        username: "jm2",
        timeline: "Learning javascript!"
    }
]



