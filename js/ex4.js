// Declare studentList
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

// Add Extra credit points
for (let i = 0; i < studentList.length; i++) {
  // Update each score by adding 5 points
  for (let j = 0; j < studentList[i].scores.length; j++) {
    studentList[i].scores[j] += 5;
  }
}

// Add Missing exam score
for (let i = 0; i < studentList.length; i++) {
  // Calculate the average exam score
  let sum = 0;
  for (let j = 0; j < studentList[i].scores.length; j++) {
    sum += studentList[i].scores[j];
  }
  const averageScore = sum / studentList[i].scores.length;

  // Add the average score to the scores array
  studentList[i].scores.push(averageScore);
}

// Display results
for (let i = 0; i < studentList.length; i++) {
  console.log(`${studentList[i].firstName} ${studentList[i].lastName}: ${studentList[i].scores.join(', ')}`);
}