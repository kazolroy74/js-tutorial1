// template literals
let s1 = 'w3school';
let s2 = `you are learning from ${s1}`;

console.log(s2);

// emptys tring
let m1 = '';
let m2 = "";
// since the strings are empty console.log print two black lines.
console.log(m1);
console.log(m2);

// multiline strings
let m3 = `
this is a 
multiline 
string`;

console.log(m3);

// basic operations on JS Strings
// finding the length of a string

let p = 'JavaScript';
let len = p.length;

console.log("string length: " + len);

let s5 = "w3schools is here to learn the program of JavaScript";
let s6 = s5.length;
console.log("string length: " + s6);

// find substring of a string
let p1 = 'JavaScript Tutorial';
let p2 = p1.substring(0, 10);

console.log(p2);

let p3 = p2.substring(0, 5);

console.log(p3);

// converting string to uppercase and lowercase
let c1 = 'JavaScript';
let uCase = c1.toUpperCase();
let lCase = uCase.toLocaleLowerCase();

console.log(uCase);
console.log(lCase);

// string search in JavaScript
let k1 = 'def abc abc';
let k2 = k1.indexOf('abc');

console.log(k2);

let k4 = 'mango khai'
let k5 = k4.indexOf('khai');

console.log(k5);

// string replace in javascript
let str1 = 'Learn HTML at w3schools and HTML is usefull';
let str2 = str1.replace(/HTML/g, "JavaScript");
console.log(str2);

//replace method
//str.replace(value1, value2);

let string = 'w3schools';
let newString = string.replace('w3school', 'javascript');

console.log(newString);

let re = /W3Schools/;
//taking a string as input
let reStr = 'W3Schools is a CS portal';

// calling replace() method to replace
let newreStr = reStr.replace(re, 'js');

console.log(newreStr);

// trimming whitespace from string
let trStr = '   Learn JavaScript  ';
let newTrStr = trStr.trim();

console.log(newTrStr);

//access characters from string
let accChar = 'Learn JavaScript';
let newaccChar = accChar[6];
console.log(newaccChar);

newaccChar = accChar.charAt(6);
console.log(newaccChar);

//string comparison in JavaScript
let strCm = 'Ajay';
// strCM2 is String Object
let strCm2 = new String('Ajay');
//type coercion--true return
console.log(strCm == strCm2);

//string compare--false return
//strCm is only string but strCm2 is a object
//they both differen, strCm -- primitive string, strCm2---string object
console.log(strCm === strCm2);

//0 -- equal string
//-1 --first string comes before the second
//1 -- first string comes after the second
console.log(strCm.localeCompare(strCm2));

//passing js string as objects
const str3 = new String("javascript");
console.log(str3);

const str4 = new String("w3schools");
const str5 = "w3schools";

console.log(str4 == str5);
console.log(str4 === str5);