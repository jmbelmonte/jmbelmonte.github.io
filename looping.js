var todoList = [
    "Play",
    "Eat",
    "Dance",
    "Excercise",
    "Sleep"
];

var todoListImportant = [
    "Pray",
    "Pray",
    "Pray"
];

/* var todoLength = todoList.length;
for (i=0; i < todoLength; i++) {
    console.log(todoList[i] + "!");    
} */

/* var counterNum = 10;
while (counterNum < 10) {
    console.log("While - " + counterNum);
    counterNum++;
};

var counterNum2 = 10;
do {
    console.log("Do While - " + counterNum2);
    counterNum2++;
} while (counterNum2 < 10) */

function todo(todo,i) {
    console.log(todo,i);
}

todoList.forEach(todo);
todoListImportant.forEach(todo);