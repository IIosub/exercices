while (true) {
  let text = prompt("Enter a text:");
  if (text === "yes" || text === "no") {
    break;
  }

  console.log("Try again");
}
