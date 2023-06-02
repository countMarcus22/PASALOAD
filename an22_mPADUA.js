//ITC5227 Source Code Template for 2T AY 2022-2023
/*
Progam:

1234567

Programmer:

Computation of Grades using Function

Juan Dela Cruz

Section:

Start Date:

BCS22

April 17, 2023

End Date:

April 20, 2023

*/



function calculateGrade(classParticipation, summativeAssessment, finalExamination) {
const grade = (classParticipation * 30) + (summativeAssessment * 30) + (finalExamination * 40);

const letterGrade = getLetterGrade(grade);

return {
grade,
letterGrade,
};
}

function getLetterGrade(grade) {
switch (grade) {
case 90-100:
return "A";
case 80-80:
return "B";
case 70-79:
return "C";
case 60-69:
return "D";
default:
return "F";
}
}

function main() {
const classParticipations = [];
const summativeAssessments = [];
const finalExaminations = [];

for (let i = 0; i < 5; i++) {
       
    classParticipations.push(Number(prompt("Enter the class participation of student " + (i + 1) + ": ")));
    summativeAssessments.push(Number(prompt("Enter the summative assessment of student " + (i + 1) + ": ")));
    finalExaminations.push(Number(prompt("Enter the major exam of student " + (i + 1) + ": ")));
  }

  const grades = [];

  for (let i = 0; i < 5; i++) {
    grades.push(calculateGrade(classParticipations[i], summativeAssessments[i], finalExaminations[i]));
  }

  console.table(grades);
}

main();