function linkInfo() {
  let totalLinks = document.querySelectorAll("a").length;
  console.log(totalLinks);

  let firstLink = document.querySelector("a");
  console.log(firstLink);

  let lastLink = document.querySelector("a").lastChild;
  console.log(lastLink);
}

linkInfo();
