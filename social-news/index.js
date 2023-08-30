let links = [];

function showMenu() {
  let options = parseInt(
    prompt(
      "Chose an option: \n1: Show links \n2:Add Link \n3: Remove Link \n0:Quit"
    )
  );

  if (options === 1) {
    showLinks();
  } else if (options === 2) {
    addLinks();
  } else if (options === 3) {
    removeLinks();
  } else if (options === 0) {
    return;
  } else {
    showMenu();
  }
}

showMenu();

function showLinks() {
  if (links.length === 0) {
    alert("There are no links stored yet. Choose option 2 to add links.");
  } else {
    let linksInfo = "";
    for (let i = 0; i < links.length; i++) {
      linksInfo += `${i} : ${links[i].name} (${links[i].link}). Author ${links[i].author}\n`;
    }
    alert(linksInfo);
  }

  showMenu();
}

function addLinks() {
  let linkName = prompt("Name of the link:");
  let linkAddress = prompt("Enter the link address:");
  let linkAuthor = prompt("Enter the author:");

  if (!linkAddress.startsWith("http//")) {
    linkAddress = "http" + linkAddress;
  }

  let linksValues = {
    name: linkName,
    link: linkAddress,
    author: linkAuthor,
  };
  links.push(linksValues);

  showMenu();
}

function removeLinks() {
  if (links.length === 0) {
    showMenu();
  } else {
    let indexLink = prompt(
      `Enter the index of the link to be removed (between 1- ${links.length})} `
    );
    let index = indexLink - 1;
    links.splice(index, 1);
    showMenu();
  }
}
