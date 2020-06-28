//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
/* const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

console.log() */

//Currying: What does the last line return?
/* const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b


console.log(curriedSum(30)(1)) */


//Currying: What does the last line return?
/* const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)


console.log(add5(12)) */

//Composing: What does the last line return?
/* const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;


console.log(compose(add1, add5)(10)) */

//What are the two elements of a pure function?


// Advanced Array

const array = [1, 2, 3, 4];

const double = [];

const newArray = array.forEach(num => {
    double.push(num * 2);
});

console.log('foreach', double);

const mapArray = array.map(num => num * 2);

console.log('mapArray',mapArray);

const filterArray = array.filter(num => num >= 2);

console.log('filterArray',filterArray);

const reduceArray = array.reduce((acc,num) => {
    return acc + num; //1 3 6 10
}, 0);

console.log('reduceArray', reduceArray);