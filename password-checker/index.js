document.getElementById("password1").addEventListener("input", (e) => {
  const password1 = e.target.value;
  const password2 = document.getElementById("password2").value; // Get the value of the second password input
  const numbers = /[0-9]/;
  console.log(password2);

  const help = document.getElementById("passwordHelp");
  console.log(password1);

  if (password1.length >= 6) {
    help.textContent = ""; // Clear the error message if the password is valid
  } else {
    help.textContent = "Your password must contain at least 6 characters.";
  }

  if (password1 === password2) {
    help.textContent = "";
    password1.style.colour = "green";
  } else if (password1.length >= 6 && password2 >= 0) {
    help.textContent = "Your passwod does not match.";
    password1.style.colour = "red";
  }

  if (password1 == numbers) {
    help.textContent = "";
  } else {
    help.textContent = "You password must contain a digit number";
  }
});
