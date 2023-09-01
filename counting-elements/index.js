// TODO: write the countElements() function here

function countElements(selector) {
  let elements = document.querySelectorAll(selector);
  return elements.length;
}

console.log(countElements("p")); // Should show 4
console.log(countElements(".adjective")); // Should show 3
console.log(countElements("p .adjective")); // Should show 3
console.log(countElements("p > .adjective")); // Should show 2
