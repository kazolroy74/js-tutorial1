const age = 18;
if (age >= 18) {
    console.log("you are an adult.");
}

//if...else statement
const score = 40;
if (score >= 50) {
    console.log("you passed.");
} else {
    console.log("you failed.");
}
// multiple conditions
const temp = 25;
if (temp > 30) {
    console.log("it's not hot.");
} else if (temp >= 20) {
    console.log("it's warm.")
} else {
    console.log("it's cold.");
}

//switch statement
const day = "monday";
switch (day) {
    case "monday":
        console.log("start of the week.");
        break;
    case "friday":
        console.log("end of the workweek.");
        break;
    default:
        console.log("it's regular day.");
}

//for loop
for (let i = 1; i <= 3; i++) {
    console.log("the for loop result is :", i);
}

//while loop
let k = 1;
while (k <= 3) {
    console.log("the while loop result:", k)
    k++;
}

//do...while loop
let j = 1;
do {
    console.log("the do...while loop result is:", j);
    j++;
} while (j <= 3);

//ternary operator
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");