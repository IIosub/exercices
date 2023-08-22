//const carouselRounds = 10;
let carouselRounds = prompt("How many rounds should the carousel be lounched?");

for (let i = 1; i <= carouselRounds; i++) {
  console.log("Round - " + i);
}

let startUp = 1;
while (startUp <= carouselRounds) {
  console.log(startUp);
  startUp++;
}
