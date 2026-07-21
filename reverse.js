let str = "bangladesh";
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

let name = "Bangladesh";
let reverseString = '';
for (let i = name.length - 1; i >= 0; i--) {
    reverseString += name[i];
}
console.log(reverseString);

//remove first occurrence
let s = "Bangladesh";
res = s.replace("B", "");
console.log(res);
//using replace for regular expression
s1 = 'Bangladesh';
res1 = s.replace(/B/g, "");
console.log(res1);

//using substring method
let str1 = "hello world";
let newStr = str1.substring(0, 4) + str1.substring(5);
console.log(newStr);

// using slice() method
let str2 = "hello world";
let newStr2 = str2.slice(0, 4) + str2.slice(5);
console.log(newStr2);

//using split and join()
let sort = "w3schools";
let res2 = sort.split('w').join('');
console.log(res2);

//using array.filter
let filter = "w3schools";
let c = 'w';
let arrFill = Array.from(filter)
    .filter(char => char !== c)
    .join('');
console.log(arrFill);