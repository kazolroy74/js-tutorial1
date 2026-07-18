let fruits = ["Orange", "Apple", "Banana"];
fruits.sort();
console.log(fruits);
let numbers = [10, 5, 100, 20];
numbers.sort((a, b) => a - b);
console.log(numbers);

let numbers1 = [10, 20, 5, 6, 8, 20];
numbers1.sort((a, b) => a - b);
console.log(numbers1);

// slice contains start, end
let fruits1 = ["apple", "banana", "orange", "mango"];
let newfruits1 = fruits1.slice(1, 3);
console.log(newfruits1);

//splice index, delete item, and add items
let fruits2 = ["apple", "banana", "cherry", "orange"];
let newfruits2 = fruits2.splice(2.1, "kawi");
console.log(newfruits2);