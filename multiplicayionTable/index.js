let userNum = prompt("Wite a number from 2-9");

for (let i = 1; i <= userNum; i++) {
  if (userNum >= 2 && userNum <= 9) {
    console.log(i * userNum);
  }
}
