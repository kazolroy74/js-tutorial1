//console.log
console.log("Hello, World!");
//console.error ---> red and error.
console.error("error message.");
//console.warn ---> warn and yellow
console.warn("warning message.")
//console.info--->informational message and %placeholder for css styles
console.info('%cthis is a styled info message!', 'color: red, font-size: 16px, font-weight: bold;');
//console.table--->display structured table format
console.table([{ name: "amit", age: 30 }, { name: "kishore", age: 40 }]);
//console.time() & console.timeEnd()--->starts timer and stops timer
console.time('timer 1');
function loops() {
    for (let j = 0; j <= 1000; j++) {

    }
}
loops()
console.timeEnd('timer1');
//console.assert--->logs an error message
console.assert(5 > 10, "assertion failed.");
//console.group() and console.groupEnd()--->group related log in console
console.group("user info");
console.log("name:kazol");
console.log("age:30");
console.groupEnd();
//console.count--->logs the number of times 
console.count("countLabel");
console.count("countLabel");
console.count("countLabel");
console.count("countLabel");
//console.trace()---> stack trace to the console
function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()