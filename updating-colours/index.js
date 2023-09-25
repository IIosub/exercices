function newBackground() {
  let colourText = prompt("What colour should the text be?");

  let colourBackground = prompt("What colour background of the text be?");

  const allDivs = document.querySelectorAll("div");

  allDivs.style.colour = "colourText";
  allDivs.style.backgroundColor = "colourBackground";
  console.log(allDivs);
}

newBackground();
