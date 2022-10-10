const Y1Q1PCO = document.getElementById('Y1Q1-PCO');

function gradeassignment (grade, element) {
  element.textContent = grade;
  element.classList.add('centertext');
  if (grade >= 5.5) {
    element.classList.add('passed');
  } else {
    element.classList.add('failed');
  }
}

gradeassignment(Y1Q1PCO);
