//normal function
//function add(a, b){
// return a+b;
//}
//console.log(add(2,3));
//function carrying
function add(a) {
    return function (b) {
        return a + b;
    }
}
const addTwo = add(5); //first function call with 5
console.log(addTwo(4));

//carrying with arrow functions
const sum = a => b => a + b;
console.log(add(5)(4));

//declare function parameters in js
function check(a, b) {
    b = b || 0;
    console.log("value of a is: " + a + " value of b is: " + b);
}
check(5, 3);
check(10);
//assignment operator
function check2(a, b = 0) {
    console.log("value of a is: " + a + " value of b is: " + b);
}
check2(9, 10);
check2(1);
//using argument variable
function w3(a, b) {
    //no parameters are passed
    if (arguments.length === 0) {
        a = 'hello';
        b = 'w3'
    }
    //only one parameters is passed
    if (arguments.length === 1) {
        b = "w3";
    }
    return `${a + b}`;
}
console.log(w3("hey"));

//rest parameters
function check(a, ...rest) {
    let b = rest.length > 0 ? rest[0] : 0;
    console.log(`value of a is ${a} value of b is ${b}`);
}
check(5, 3);
check(10);
check(1, 2, 3);

// syntax of rest parameter
// function myFunc(a, ...rest){
//     function body
// }