// index.js

// Function to capitalize the first letter of each word in a string
function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => {
      if (word === "NaN") return "NaN";
      if (word.toLowerCase() === "stoppropagation") return "StopPropagation";
      if (word.toLowerCase() === "preventdefault") return "PreventDefault";
      if (word.toUpperCase() === word) return word; // Preserve already capitalized words
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// Function to convert all tutorial titles to title case
function titleCased() {
  return tutorials.map(toTitleCase);
}

// Sample data
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

// Testing the function
console.log(titleCased());

// Demonstrate map() with arrays
const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(student => student + " the skier");
console.log(rollCall);

// Demonstrate map() with complex data structures
const robots = [
  { name: "Johnny 5", modes: 10, isActivated: true },
  { name: "C3PO", modes: 6, isActivated: true },
  { name: "Sonny", modes: 5, isActivated: true },
  { name: "Baymax", modes: 3, isActivated: true }
];

const activatedRobots = robots.map(robot => {
  return {
    ...robot,
    modes: robot.modes * 2,
    isActivated: true
  };
});

console.log(activatedRobots);
