let firstName = "John";
let lastName = "Doe";
let age = 20;

let sentence = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

let multiLine = `Hello, ${firstName}!
Next year, you will be ${age + 1} years old.`;

let ageMessage = `${age >= 18 ? "You are an adult." : "You are a minor."}`;

console.log(sentence);
console.log(multiLine);
console.log(ageMessage);
