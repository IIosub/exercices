while (true) {
  let number = parseInt(prompt("Enter a number:"));

  if (!isNaN(number) && number >= 1 && number <= 100) {
    break;
  }
}
