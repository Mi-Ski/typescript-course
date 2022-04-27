
// enums
enum Role {ADMIN, USER, MODERATOR, BANNED};

let r = Role.MODERATOR;

console.log(r);

if (r === Role.MODERATOR)  {
  console.log(`Role ${r} is a mod (${Role[r]})`);
}