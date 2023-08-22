let initialNumber = prompt("Enter a number:");

for (let i = initialNumber; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
  if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  }
}
