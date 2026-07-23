//creating using object literal
let obj = {
    name: "saurav",
    age: 23,
    job: "developer"
};
console.log(obj);

//creating usnig new objcet constructor
let man = new Object();
man.name = "karim",
    man.age = 23,
    man.job = "developer"
console.log(man);

//accessing object properties
let obj2 = { name: "saurav", age: 23 };
//using dot notation
console.log(obj.name);
//using bracket notation
console.log(obj2["age"]);

let kazo = { fatherName: "late suhil", age: 55, village: "xys" };
//using dot notation
console.log(kazo.name);
console.log(kazo.age);
console.log(kazo.village);
//using bracket notation
console.log(kazo["name"]);
console.log(kazo["village"]);

//modifiying obj properties
let obj3 = { name: "saurav", age: 22 };
console.log(obj3);
obj3.age = 33;
console.log(obj3);

//adding properties to an obj
let obj4 = { model: "tesla" };
obj4.collor = "red";
console.log(obj4);

//removing object from an obj
let obj5 = { model: "tesla", color: "red" };
delete obj5.color;
console.log(obj5);

//checking if a property exits
let obj6 = { model: "tesla" };
console.log("color" in obj6);
console.log(obj6.hasOwnProperty("model"));
console.log(obj6.hasOwnProperty("number"));

//iterating through object properties
let obj7 = { name: "saurav", age: 23 };
for (let key in obj7) {
    console.log(key + ": " + obj7[key]);
}

//mergin objects
let obj8 = {
    name: "saurav",
    age: 23
};
let obj9 = {
    village: "xyx para"
};
let obj10 = { ...obj8, ...obj9 };
console.log(obj10);

//object lengt
let obj11 = {
    name: "saurav",
    age: 55,
    village: "xys para"
};
console.log(Object.keys(obj11).length);

//common mistakes with js
//object literal
const obj12 = { key: "value" };
//object constructor
const obj13 = new Object();
obj13.key = "value";
console.log(obj12);
console.log(obj13);
