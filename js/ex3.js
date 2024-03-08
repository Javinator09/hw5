// Declare studentList Array
const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];

// Declare cLastNameResults using functional programming

// Filter students whose last name starts with c
const cLastNameResults = studentList.filter(function (student) {
  return student.lastName.charAt(0).toUpperCase() === 'C';
});

// Map each student 
const mappedResults = cLastNameResults.map(function (student) {
  const scores = student.scores;
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);

// Calculate average score
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const averageScore = sum / scores.length;

// Create a new object with required properties
  return {
    firstName: student.firstName,
    lastName: student.lastName,
    minScore: minScore,
    maxScore: maxScore,
    averageScore: averageScore.toFixed(2),
  };
});

// Output 
console.log(mappedResults);