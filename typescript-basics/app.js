var addAndHandle = function (num1, num2, cb) {
    cb(num1 + num2);
    return num1 + num2;
};
var printAdd = function (str) {
    console.log("here's your string: " + str);
};
var strNum = addAndHandle(2, 2, function (num) {
    console.log(num + 20);
}).toString();
printAdd(strNum);
var futureAddFunct;
futureAddFunct = addAndHandle;
console.log(futureAddFunct(5, 10, function (num) {
    console.log(num);
}));
