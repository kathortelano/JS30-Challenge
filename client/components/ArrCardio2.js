import React from "react";

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = new Date();

  return currentYear.getFullYear() - person.year >= 19;
});
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => {
  const currentYear = new Date();

  return currentYear.getFullYear() - person.year >= 19;
});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findId = comments.find((comment) => comment.id === 823423);
console.log(findId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteItem = comments.findIndex((comment) => comment.id === 823423);
const deleted = [
  ...comments.slice(0, deleteItem),
  ...comments.slice(deleteItem + 1),
];

console.table(deleted);

export const ArrCardio2 = () => {
  return (
    <div>
      <h2>At least one person 19 or older?</h2>
      {isAdult ? "true" : "false"}

      <h2>Is everyone one 19 or older?</h2>
      {allAdults ? "true" : "false"}

      <h2>find the comment with the ID of 823423</h2>
      {JSON.stringify(findId)}

      <h2>find the comment with this ID: 823423</h2>
      {JSON.stringify(deleted)}
    </div>
  );
};
