function addDesert(event) {
  const desertList = [];
  const userChoice = prompt("My favorite desert is:");
  desertList.push(userChoice);

  desertList.forEach((desert) => {
    const list = document.getElementById("desserts");
    list.textContent = desertList;
  });
}

addDesert();
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addDesert);
