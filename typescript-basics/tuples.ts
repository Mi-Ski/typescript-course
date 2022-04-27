// Tuples  

const person : {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: "Max",
  age: 30,
  hobbies: ["sport", "cooking"],
  role: [2, "author"],
}

person.role[0] = 3;

console.log(person.role);