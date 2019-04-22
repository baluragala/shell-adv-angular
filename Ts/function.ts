let add = function(x: number, y: number, args?: number, def = 10): number {
  console.log(args, def);
  return x + y;
};

let s = add(10, 20);

let numbers = [1, 2, 3, 4, 5];
numbers.map(n => n * 10);

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
