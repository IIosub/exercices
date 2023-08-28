function stop() {
  let word;
  let words = [];

  while (word !== "stop") {
    word = prompt("Write a word");

    words.push(word);
  }

  words.pop();

  words.forEach((element) => console.log(element));
}

stop();
