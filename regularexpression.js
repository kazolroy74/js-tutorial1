/*  
creating a regular expression to match
the word "hello"
*/
let pattern =/hello/;
//testing the pattern against a string
//returns false because "hello" is not present
let result=pattern.test("Hello, world!");
console.log(result);
