const musketeers = ["Athos", "Porthos", "Aramis"];

musketeers.pop([2]);

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

console.log(musketeers);

musketeers.forEach((musketeer) => {
  console.log(musketeers);
});

for (const musketeer of musketeers) {
  console.log(musketeer);
}
