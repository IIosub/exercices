// TODO: create the dog object here

const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,

  bark() {
    return "Grrrrr! Grrrr!";
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
