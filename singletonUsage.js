const singletonDB = require("./singleton");

console.log(singletonDB);

const a = singletonDB();
console.log(a)

const b = singletonDB();
console.log(b)
console.log(a==b)
console.log(a===b)

