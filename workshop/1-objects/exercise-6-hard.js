// Exercise 6
// -------------------

var favoriteDessert = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles"
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...
const desserts = new Set(Object.values(favoriteDessert));
const newObj = {};
const arrayObjects = [];

for (key in favoriteDessert) {
  if (desserts.has(favoriteDessert[key])) {
    if (!newObj[favoriteDessert[key]]) {
      newObj[favoriteDessert[key]] = 1;
    } else {
      newObj[favoriteDessert[key]] += 1;
    }
  }
}
for (key in newObj) {
  arrayObjects.push({ name: key, value: newObj[key] });
}
arrayObjects
  .sort(function(a, b) {
    return a.value - b.value;
  })
  .reverse();

const ranking = [];

for (let i = 0; i < arrayObjects.length; i++) {
  ranking.push(
    `# ${i + 1} ${arrayObjects[i].name.toUpperCase()} had ${
      arrayObjects[i].value
    } votes\n`
  );
}
console.log(ranking.join(""));

// B
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ..
