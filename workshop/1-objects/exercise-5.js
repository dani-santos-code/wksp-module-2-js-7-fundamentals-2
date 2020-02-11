// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 }
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

people.push({
  name: { first: "Daniele", middle: "de Araujo", last: "dos Santos" },
  age: 35
});

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  // Yuor code here
  let sum = 0;
  let arraySize = 0;
  peopleArr.forEach(obj => {
    sum += obj.age;
    arraySize += 1;
  });
  return Math.round(sum / arraySize);
}

console.log(`Average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  // Your code here
  return peopleArr.forEach(obj => {
    console.log(
      obj.name.middle
        ? `${obj.name.first} ${obj.name.middle} ${obj.name.last}`
        : `${obj.name.first} ${obj.name.last}`
    );
  });
}
fullName(people);

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  // Your code here
  return peopleArr.filter(obj => {
    return obj.age > 26;
  });
}

console.log(olderPeople(people, 26));
