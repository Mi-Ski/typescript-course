
// object types
const michal: {name: string, age: number} = {
  name: "michal",
  age: 22
}

michal.age = 23;

console.log(michal.age);

// array types
const hobby:(number | string)[] = ["sports"];

let favoriteActivities:(string | {mostFav:string, lestFav:string})[];

favoriteActivities = [{
  mostFav: "learning",
  lestFav: "lifting"
}, "lifting", "driving", "learning"];

let random:any[];

const hobbies:string[] = ["sports", "programming", "art"];
for (let el of hobbies) {
  console.log(el.replace(el[0], "X"));
}