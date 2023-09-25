function incrementClick() {
  const incrementNum = document.getElementById("clickCount");
  const currentCount = parseInt(incrementNum.textContent);
  const incrementedValue = currentCount + 1;

  incrementNum.textContent = incrementedValue;

  console.log(incrementedValue);
}

const clickMe = document.getElementById("myButton");
clickMe.addEventListener("click", incrementClick);

function decrementClick() {
  const decrementNum = document.getElementById("clickCount");
  const currentCount = parseInt(decrementNum.textContent);
  const decrementValue = currentCount - 1;

  decrementNum.textContent = decrementValue;
}

const disactivateCountin = document.getElementById("deactivate");
disactivateCountin.addEventListener("click", decrementClick);
