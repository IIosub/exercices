const houses = [
  {
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];

const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const houseDropdown = document.getElementById("house");
const charactersList = document.getElementById("characters");

// Populate the house dropdown
houses.forEach((house) => {
  const option = document.createElement("option");
  option.value = house.code;
  option.text = house.name;
  houseDropdown.appendChild(option);
});

houseDropdown.addEventListener("change", (e) => {
  const selectedHouseCode = e.target.value;
  const charactersOfHouse = getCharacters(selectedHouseCode);

  // Clear the previous character list
  charactersList.innerHTML = "";

  // Add characters to the list
  charactersOfHouse.forEach((characterName) => {
    const listItem = document.createElement("li");
    listItem.textContent = characterName;
    charactersList.appendChild(listItem);
  });
});
