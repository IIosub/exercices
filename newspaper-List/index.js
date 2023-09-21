function showNews() {
  const newsPapers = [
    "https://www.nytimes.com",
    "https://www.washingtonpost.com",
    "http://www.economist.com",
  ];

  const containerElement = document.getElementById("content");
  console.log(containerElement);

  newsPapers.forEach((newspaperUrl) => {
    const linkElement = document.createElement("a");

    linkElement.setAttribute("href", newspaperUrl);

    linkElement.style.display = "block";
    linkElement.style.color = "blue";

    linkElement.textContent = newspaperUrl;

    containerElement.appendChild(linkElement);
  });
}

showNews();
