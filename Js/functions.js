/*functions*/

hello("shell");
//named function
function hello(name) {
  let message = `Hello, ${name}`;
  return message;
}

hello1("kirs");
hello2("bala");

//anonymous
let hello1 = function(name) {
  let message = `Hello, ${name}`;
  return message;
};

let hello2 = hello1;

let numbers = [1, 2, 3, 4, 5];
numbers.map(function(n) {
  return n * 10;
});
