"use strict";
var userName;
userName = "Shell";
var age = 20;
var friends = ["jim", "kim"];
console.log(userName, age, friends);
var Status;
(function (Status) {
    Status[Status["OK"] = 0] = "OK";
    Status[Status["WARN"] = 300] = "WARN";
    Status[Status["ERROR"] = 301] = "ERROR";
})(Status || (Status = {}));
var apiStatus;
apiStatus = Status.OK;
if (apiStatus === Status.OK) {
}
