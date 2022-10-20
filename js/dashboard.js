const gradetable = document.getElementById('gradetable');
const grades = gradetable.querySelectorAll('.grade');

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

gradeassignment(9.8, grades[0]);

const studymonitor = [
  {
    name: '1',
    courses: [
      { name: 'Program and Career Orientation', ec: 2.5, exam: { grade: 9.8, type: 'Assesment exam' } },
      { name: 'Computer Science Basics', ec: 5, exam: { grade: 'Unknown', type: 'Written exam' } },
      { name: 'Programming Basics', ec: 5, exam: { grade: 'Unknown', type: 'Case study exam' } }
    ]

  },

  {
    name: '2',
    courses: [
      { name: 'Object Oriented Programming', ec: 10, exam: [{ grade: 'Unknown', type: 'Case study (50%)', percentage: 0.5 }, { grade: 'Unknown', type: 'Project (50%)', percentage: 0.5 }] }
    ]

  },

  {
    name: '3',
    courses: [
      { name: 'Framework Development 1', ec: 5, exam: { grade: 'Unknown', type: 'Case study' } },
      { name: 'Framework Project 1', ec: 7.5, exam: [{ grade: 'Unknown', type: 'Project (33%)', percentage: (1 / 3) }, { grade: 'Unknown', type: 'Case study exam (33%)', percentage: (1 / 3) }, { grade: 'Unknown', type: 'Report (33%)', percentage: (1 / 3) }] }
    ]

  },

  {
    name: '4',
    courses: [
      { name: 'Framework Development 2', ec: 10, exam: [{ grade: 'Unknown', type: 'Portfolio (50%)', percentage: 0.5 }, { grade: 'Unknown', type: 'Project (25%)', percentage: 0.25 }, { grade: 'Unknown', type: 'Assesment (25%)', percentage: 0.25 }] }
    ]

  },

  {
    name: 'Year',
    courses: [
      { name: 'Personal Professional Development', ec: 12.5, exam: { grade: 'Unknown', type: 'Portfolio' } }
    ]

  },

  {
    name: 'Whenever',
    courses: [
      { name: 'Personality 1', ec: 1.25, exam: { grade: 'Unknown', type: 'Portfolio' } },
      { name: 'Personality 2', ec: 1.25, exam: { grade: 'Unknown', type: 'Portfolio' } }
    ]

  }
];

console.log(studymonitor[0].courses[0].exam.grade);

const table = document.getElementById('gradetable');
table.classList.add('centertext');
table.innerHTML = `
<tr>
  <th>Quartile</th>
  <th>Course</th>
  <th>Ec</th>
  <th>Exam</th>
  <th>Grade</th>
</tr>
<tr>
  <td rowspan="3">${studymonitor[0].name}</td>
  <td>${studymonitor[0].courses[0].name}</td>
  <td class="ec">${studymonitor[0].courses[0].ec}</td>
  <td>${studymonitor[0].courses[0].exam.type}</td>
  <td class="grade">${studymonitor[0].courses[0].exam.grade}</td>
</tr>
<tr>
<td>${studymonitor[0].courses[1].name}</td>
<td class="ec">${studymonitor[0].courses[1].ec}</td>
<td>${studymonitor[0].courses[1].exam.type}</td>
<td class="grade">${studymonitor[0].courses[1].exam.grade}</td>
</tr>
<tr>
<td>${studymonitor[0].courses[2].name}</td>
<td class="ec">${studymonitor[0].courses[2].ec}</td>
<td>${studymonitor[0].courses[2].exam.type}</td>
<td class="grade">${studymonitor[0].courses[2].exam.grade}</td>
</tr>
<tr>
  <td rowspan="2">${studymonitor[1].name}</td>
  <td rowspan="2">${studymonitor[1].courses[0].name}</td>
  <td class="ec"rowspan="2">${studymonitor[1].courses[0].ec}</td>
  <td>${studymonitor[1].courses[0].exam[0].type}</td>
  <td class="grade">${studymonitor[1].courses[0].exam[0].grade}</td>
</tr>
<tr>
  <td>${studymonitor[1].courses[0].exam[1].type}</td>
  <td class="grade">${studymonitor[1].courses[0].exam[1].grade}</td>
</tr>
<tr>
  <td rowspan="4">${studymonitor[2].name}</td>
  <td>${studymonitor[2].courses[0].name}</td>
  <td class="ec">${studymonitor[2].courses[0].ec}</td>
  <td>${studymonitor[2].courses[0].exam.type}</td>
  <td class="grade">${studymonitor[2].courses[0].exam.grade}</td>
</tr>
<tr>
  <td rowspan="3">${studymonitor[2].courses[1].name}</td>
  <td class="ec"rowspan="3">${studymonitor[2].courses[1].ec}</td>
  <td>${studymonitor[2].courses[1].exam[0].type}</td>
  <td class="grade">${studymonitor[2].courses[1].exam[0].grade}</td>
</tr>
<tr>
  <td>${studymonitor[2].courses[1].exam[1].type}</td>
  <td class="grade">${studymonitor[2].courses[1].exam[1].grade}</td>
</tr>
<tr>
  <td>${studymonitor[2].courses[1].exam[2].type}</td>
  <td class="grade">${studymonitor[2].courses[1].exam[2].grade}</td>
</tr>
<tr>
  <td rowspan="3">${studymonitor[3].name}</td>
  <td rowspan="3">${studymonitor[3].courses[0].name}</td>
  <td class="ec"rowspan="3">${studymonitor[3].courses[0].ec}</td>
  <td>${studymonitor[3].courses[0].exam[0].type}</td>
  <td class="grade">${studymonitor[3].courses[0].exam[0].grade}</td>
</tr>
<tr>
  <td>${studymonitor[3].courses[0].exam[1].type}</td>
  <td class="grade">${studymonitor[3].courses[0].exam[1].grade}</td>
</tr>
<tr>
  <td>${studymonitor[3].courses[0].exam[2].type}</td>
  <td class="grade">${studymonitor[3].courses[0].exam[2].grade}</td>
</tr>
<tr>
  <td>${studymonitor[4].name}</td>
  <td>${studymonitor[4].courses[0].name}</td>
  <td class="ec">${studymonitor[4].courses[0].ec}</td>
  <td>${studymonitor[4].courses[0].exam.type}</td>
  <td class="grade">${studymonitor[4].courses[0].exam.grade}</td>
</tr>
<tr>
  <td rowspan="2">${studymonitor[5].name}</td>
  <td>${studymonitor[5].courses[0].name}</td>
  <td class="ec">${studymonitor[5].courses[0].ec}</td>
  <td>${studymonitor[5].courses[0].exam.type}</td>
  <td class="grade">${studymonitor[5].courses[0].exam.grade}</td>
</tr>
<tr>
  <td>${studymonitor[5].courses[1].name}</td>
  <td class="ec">${studymonitor[5].courses[1].ec}</td>
  <td>${studymonitor[5].courses[1].exam.type}</td>
  <td class="grade">${studymonitor[5].courses[1].exam.grade}</td>
</tr>`;
