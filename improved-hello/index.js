function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

let firstName = prompt("What is your fist name?");
let lastName = prompt("What is your last name?");

console.log(sayHello(firstName, lastName));
