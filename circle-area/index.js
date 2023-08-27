/*Circumference and area of a circle

Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.*/

//Here are some tips for solving this exercise:

//Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//The value of number π (Pi) is obtained with Math.PI in JavaScript.
//You might want to use the exponentiation operator ** to perform computations.
//console.log(2 ** 3); // 8: 2 * 2 * 2
//console.log(3 ** 2); // 9: 3 * 3

/*
function areaCircle() {
  let area = Math.PI * radius ** 2;

  return area;
}

console.log(areaCircle());
*/

function areaCircle() {
  function radius() {
    let circumference = prompt("How much is a circumference of a circle?");
    let result = (circumference / 2) * Math.PI;
    return result;
  }
  console.log(radius());

  function circumferenceCircle() {}
}
