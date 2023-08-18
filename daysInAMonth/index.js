/*const monthNum = prompt(
  "Write a number that corespontd to a month from 1 to 12"
);

if (
  monthNum == 1 ||
  monthNum == 3 ||
  monthNum == 5 ||
  monthNum == 7 ||
  monthNum == 8 ||
  monthNum == 10 ||
  monthNum == 12
) {
  console.log("This month has 31 days");
} else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
  console.log("This month have 30 days");
} else if (monthNum == 2) {
  console.log("This month has 27 days");
} else {
  console.log("You must enter a number from 1 to 12!");
}
*/

function monthDays() {
  const monthNum = parseInt(
    prompt("Write a number that corresponds to a month from 1 to 12")
  );
  //parseInt() will convert a string into a interger(number).
  const days31 = [1, 3, 5, 7, 8, 12];
  const days30 = [4, 6, 9, 11];
  const days28 = 2;
  //I have stored in a variable that indicates how many days each month has.

  if (days31.includes(monthNum)) {
    alert("This month has 31 days");
  } else if (days30.includes(monthNum)) {
    alert("This month has 30 days");
  } else if (monthNum === days28) {
    alert("This month has 28 days");
  } else {
    alert("You need to enter a number from 1-12");
  }
  //I compared the user input to the variables saved and see if the number is entered is equal to any of stored values.
}

monthDays();
//Finaly I have called the function
