function greet(name) { //name is the parameter
    console.log("hello " + name);
}
greet("allice"); //allice is the argument

//default parameter
function greet2(name = "guest") {
    console.log("hello, " + name);
}
greet2();
greet2("aman");

function add(a, b) {
    return a + b; //retrun the sum
}
let result = add(5, 10);
console.log(result);

// named function
function abc() {
    return "hello";
}
let abc2 = abc();
console.log(abc2);

//annonymous function
const abc3 = function () {
    return "hi there!";
}
console.log(abc3());

const add2 = function (a, b) {
    return a + b;
};
console.log(add2());
console.log(add2(55, 5));

//arrow function
const square = n => n * n;
console.log(square(4));

//invoked function expression
(function () {
    console.log("this runs immediately!");
})();

//callback functions
function num(n, callback) {
    return callback(n);
}
const double = n => n * 2;
console.log(num(5, double));

function func(name) {
    console.log("hello " + name);
}
function processUsser(callback) {
    callback("abc");
}
processUsser(func);

//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const user = new Person("neha", 22);
console.log(user.name);
console.log(user.age);

//async function
async function fetchData() {
    return "data fetched!";
}
fetchData().then(console.log);

//generator function
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numbers();
console.log(gen.next().value);
console.log(gen.next().value);

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

//higher order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}
function sum(x, y) {
    return x + y;
}
console.log(applyOperation(2, 3, sum));

//nested function
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));

//pure function
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));

//rest parameter function
function sum2(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum2(1, 2, 3, 4));