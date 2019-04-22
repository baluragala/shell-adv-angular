let userName: string;
userName = "Shell";
let age = 20;
let friends: Array<string> = ["jim", "kim"];
console.log(userName, age, friends);
enum Status {
  OK,
  WARN = 300,
  ERROR
}
let apiStatus: Status;

apiStatus = Status.OK;

if (apiStatus === Status.OK) {
}
