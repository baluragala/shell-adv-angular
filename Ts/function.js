"use strict";
var add = function (x, y, args, def) {
    if (def === void 0) { def = 10; }
    console.log(args, def);
    return x + y;
};
var s = add(10, 20);
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (n) { return n * 10; });
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.print = function() {
//     return `Name : ${this.name}, Age: ${this.age}`;
//   };
// }
// function Person1(name, age) {
//   this.name = name;
//   this.age = age;
//   this.print = () => {
//     return `Name : ${this.name}, Age: ${this.age}`;
//   };
// }
