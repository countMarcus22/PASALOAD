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



var studentNames = [];
var classParticipationGrades = [];
var summativeGrades = [];
var finalExamGrades = [];

function calculateAverage(grades) {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function calculateLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

for (var i = 0; i < 5; i++) {
  var name = prompt('Enter the name of student ' + (i + 1) + ':');
  studentNames.push(name);

  var classParticipationGrade = 0;
  for (var j = 0; j < 5; j++) {
    classParticipationGrade += parseFloat(prompt('Enter the class participation grade ' + (j + 1) + ' for ' + name + ':'));
  }
  classParticipationGrades.push(classParticipationGrade / 5);

  var summativeGrade = 0;
  for (var k = 0; k < 3; k++) {
    summativeGrade += parseFloat(prompt('Enter the summative grade ' + (k + 1) + ' for ' + name + ':'));
  }
  summativeGrades.push(summativeGrade / 3);

  var finalExamGrade = parseFloat(prompt('Enter the final exam grade for ' + name + ':'));
  finalExamGrades.push(finalExamGrade);
}

console.log('--------------------------------------------------------------');
console.log('| Student Name   | Class Participation | Summative Grade | Grade |');
console.log('--------------------------------------------------------------');

for (var i = 0; i < 5; i++) {
  var grade = (classParticipationGrades[i] * 0.3) + (summativeGrades[i] * 0.3) + (finalExamGrades[i] * 0.4);
  var letterGrade = calculateLetterGrade(grade);

  console.log('| ' + studentNames[i].padEnd(15) + ' | ' + classParticipationGrades[i].toFixed(2).padEnd(19) + ' | ' + summativeGrades[i].toFixed(2).padEnd(15) + ' | ' + grade.toFixed(2).padEnd(5) + ' | ' + letterGrade.padEnd(5) + ' |');
}

console.log('--------------------------------------------------------------');
