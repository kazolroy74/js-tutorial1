//string are immutable
let s = "hello";
s[0] = "H"
console.log(s);

//using template literals
let s1 = "saurav";
let s2 = `Hi, ${s1}`;
console.log(s2);

//templates literals
let s3 = 'hello saurav';
let s4 = `welcome to my home, ${s3}`;
console.log(s4);

//string comparison
console.log("apple" > "banana");

//string vs array vs character
let s5 = "hello";
console.log(s[1]);

//string method create copies
let s6 = "hello";
let s7 = s6.toUpperCase();
console.log(s7);
console.log(s6);

// splitting and joining strings
let s8 = "apple, banana";
let s9 = s8.split(',');
console.log(s9);
console.log(s9.join(' &'));

let s10 = "apple, banana";
let s11 = s10.split('a');
console.log(s11);
console.log(s11.join('a'));

//reversing a string
let s12 = 'hello';
let s13 = s12.split('').reverse().join('');
console.log(s13);

let s14 = "Bangladesh";
let s15 = s14.split("a").reverse().join("a");
console.log(s15);

// string length as a property
let s16 = "hello";
console.log(s16.length);

//working with multiline strings
let s17 = `Roses are red,
Violets are blue,
javascript is fun,
and so are you!`;
console.log(s17);

// check for substring easily
// includes, startswith(), endswith()
let s18 = "JavaScript is great";
console.log(s18.includes("JavaScript"));
console.log(s18.startsWith('J'));
console.log(s18.endsWith('t'));