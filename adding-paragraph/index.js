const newElemet = document.createElement("p");
newElemet.id = "links";
newElemet.textContent = `Here are more `;
document.getElementById("languages").appendChild(newElemet);

const link = document.createElement("a");
link.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";

link.target = "_blank";
link.innerHTML = "links";
newElemet.appendChild(link);
