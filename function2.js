function welcome() {
    console.log("wellcome to W3School");
}
//function calling
welcome();

//function arguments
function welcome2(name) {
    console.log("hey " + "" + name + " " + "welcome to w3school");
}
//passing argument
welcome2("rohan");

function welcome3() {
    return "welcome to w3schools";
}
console.log(welcome3());

//function expression
let welcom4 = function () {
    return "welcome to W3";
}
let schools = welcom4();
console.log(schools);

//named function
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));

let add2 = function (a, b) {
    return a + b;
}
console.log(add(5, 6));

//nested function
function msg(firstName) {
    function hey() {
        console.log("hey " + firstName);
    }
    return hey();
}
msg("ravi");

//immediately invoked function
let msg2 = (function () {
    return "welcome to w3school";
})();
console.log(msg2);