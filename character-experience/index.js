// TODO: create the character object here
const aurora = {
  health: 150,
  strength: 20,
  xp: 0,

  describe() {
    return `Aurora has ${aurora.health} health points ${aurora.strength} as strength  and ${aurora.xp} xp points.`;
  },
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
