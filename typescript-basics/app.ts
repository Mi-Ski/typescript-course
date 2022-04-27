const addAndHandle = (
  num1: number,
  num2: number,
  cb: (num: number) => void
): number => {
  cb(num1 + num2);
  return num1 + num2;
};

const printAdd = (str: string): void => {
  console.log("here's your string: " + str);
};

const strNum = addAndHandle(2, 2, (num) => {
  console.log(num + 20);
}).toString();

printAdd(strNum);

let futureAddFunct: (a: number, b: number, c: (num: number) => void) => number;
futureAddFunct = addAndHandle;

console.log(
  futureAddFunct(5, 10, (num) => {
    console.log(num);
  })
);
