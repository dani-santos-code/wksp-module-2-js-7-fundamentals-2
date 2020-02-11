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

const createScore = uniqueDesserts => {
  let dessertScores = {};
  for (let key in favoriteDessert) {
    desserts.forEach(value => {
      if (value === favoriteDessert[key]) {
        if (!dessertScores[value]) {
          dessertScores[value] = 1;
        } else {
          dessertScores[value] += 1;
        }
      }
    });
  }
  return dessertScores;
};

console.log(createScore(desserts));
// B
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ..
