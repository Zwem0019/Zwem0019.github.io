const gradetable = document.getElementById('gradetable');
const grades = gradetable.querySelectorAll('.grade');
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

/**
 * @param {number} grade Grade of the exam
 * @param {*} element id of the element in the table
 */
function gradeassignment (grade, element) {
  element.textContent = grade;
  element.classList.add('centertext');
  if (grade >= 5.5 && grade <= 10) {
    element.classList.add('passed');
  } else if (grade >= 0 && grade < 5.5) {
    element.classList.add('failed');
  } else {
    element.textContent = 'Invalid';
  }
}

gradeassignment(grades[0]);
