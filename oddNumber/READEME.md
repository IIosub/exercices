=for (let i = 1; i <= 10; i++) {
if (i % 2 !== 0) {
console.log(`${i} is even`);
}

This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

console.log(10 % 2); // 0 because 10 = 5 _ 2 + 0
console.log(11 % 2); // 1 because 11 = 5 _ 2 + 1
console.log(18 % 3); // 0 because 18 = 3 _ 6 + 0
console.log(19 % 3); // 1 because 19 = 3 _ 6 + 1
console.log(20 % 3); // 2 because 20 = 3 \* 6 + 2

Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

- To show on the screen also the odd numbers we need to check if numbers is not divisible by 2.
- Ask the user for a number and store it, the use it in the for loop.
