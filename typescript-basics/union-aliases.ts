type combineAny = string | number;

function combine(input1: combineAny, input2: combineAny) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log(typeof combine("sd", 3));
console.log(typeof combine(23, 3));
