function miniDictionary() {
  const words = [
    {
      term: "Procrastination",
      definition: "Avoidance of doing a task that needs to be accomplished",
    },
    {
      term: "Tautology",
      definition:
        "logical argument constructed in such a way that it is logically irrefutable",
    },
    {
      term: "Oxymoron",
      definition:
        "figure of speech that juxtaposes elements that appear to be contradictory",
    },
  ];

  const content = document.getElementById("content");

  words.forEach((word) => {
    // Create a definition list (<dl>)
    const definitionList = document.createElement("dl");

    // Create a term element (<dt>) and set its text content
    const termElement = document.createElement("dt");
    termElement.textContent = word.term;

    // Create a definition element (<dd>) and set its text content
    const definitionElement = document.createElement("dd");
    definitionElement.textContent = word.definition;

    // Append the term and definition elements to the definition list
    definitionList.appendChild(termElement);
    definitionList.appendChild(definitionElement);

    // Append the definition list to the content element
    content.appendChild(definitionList);
  });
}

miniDictionary();
