// Function Description
// Complete the function gradingStudents in the editor below.It should return an integer array consisting of rounded grades.
// gradingStudents has the following parameter(s):
// grades: an array of integers representing grades before rounding

// Input Format
// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.

function gradingStudents(grades) {
  return grades.map(grade => {
    let diff = 5 - (grade % 5);
    if (diff < 3 && grade >= 38) {
      grade += diff;
    }
    return grade;
  });
}
