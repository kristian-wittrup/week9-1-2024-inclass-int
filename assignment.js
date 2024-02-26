// Multiplication Tables
const multiplier = 9;

for (let i = 0; i <= 10; i++) {
  const result = multiplier * i;
  console.log(`${multiplier} * ${i} = ${result}`);
}



// Multiplication Tables with nested loop
/* for (let multiplier = 1; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    const result = multiplier * i;
    console.log(`${multiplier} * ${i} = ${result}`);
  }
} */



//The Grade Assigner
 const assignGrade = score => {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

for (let score = 60; score <= 100; score++) {
  const grade = assignGrade(score);
  console.log(`For ${score}, you got a ${grade}.`);
}