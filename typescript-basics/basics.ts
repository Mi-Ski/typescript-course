
const add = (n1: number, n2: number, res: boolean, phrase: string) => {
  let result = n1 + n2;
  if (res) {
    return result; 
  }
  else {
    console.log(phrase + result)
  }
}

let number1 = 2;
let phrase = "Hello, ";
const result = false;

add(10, 15, result, phrase);