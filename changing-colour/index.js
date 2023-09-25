const content = document.querySelectorAll("div");

document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    content.forEach((div) => {
      div.style.backgroundColor = "red";
    });
  } else if (e.key == "y") {
    content.forEach((div) => {
      div.style.backgroundColor = "yellow";
    });
  } else if (e.key == "b") {
    content.forEach((div) => {
      div.style.backgroundColor = "blue";
    });
  }
});
