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
      { name: 'Computer Science Basics', ec: 5, exam: { grade: 0, type: 'Written exam' } },
      { name: 'Programming Basics', ec: 5, exam: { grade: 0, type: 'Case study exam' } }
    ]

  },

  {
    name: '2',
    courses: [
      { name: 'Object Oriented Programming', ec: 10, exam: [{ grade: 0, type: 'Case study', percentage: 0.5 }, { grade: 0, type: 'Project', percentage: 0.5 }] }
    ]

  },

  {
    name: '3',
    courses: [
      { name: 'Framework Development 1', ec: 5, exam: { grade: 0, type: 'Case study' } },
      { name: 'Framework Project 1', ec: 7.5, exam: [{ grade: 0, type: 'Project', percentage: (1 / 3) }, { grade: 0, type: 'Case study exam', percentage: (1 / 3) }, { grade: 0, type: 'Report', percentage: (1 / 3) }] }
    ]

  },

  {
    name: '4',
    courses: [
      { name: 'Framework Development 2', ec: 10, exam: [{ grade: 0, type: 'Portfolio', percentage: 0.5 }, { grade: 0, type: 'Project', percentage: 0.25 }, { grade: 0, type: 'Assesment', percentage: 0.25 }] }
    ]

  },

  {
    name: 'Year',
    courses: [
      { name: 'Personal Professional Development', ec: 12.5, exam: { grade: 0, type: 'Portfolio' } }
    ]

  },

  {
    name: 'Whenever',
    courses: [
      { name: 'Personality 1', ec: 1.25, exam: { grade: 0, type: 'Portfolio' } },
      { name: 'Personality 2', ec: 1.25, exam: { grade: 0, type: 'Portfolio' } }
    ]

  }
];

console.log(studymonitor[0].courses[0].exam.grade);

// const table = document.getElementById('gradetable');
// table.innerHTML = `
// <tr>
//   <th>Quartile</th>
//   <th>Course</th>
//   <th>Ec</th>
//   <th>Exam</th>
//   <th>Grade</th>
// </tr>
// <tr>
//   <td rowspan="3">${studymonitor[0].name}</td>
//   <td>${studymonitor[0].courses[0].name}</td>
//   <td class="ec">${studymonitor[0].courses[0].ec}</td>
//   <td>${studymonitor[0].courses[0].exam.type}</td>
//   <td class="grade">${studymonitor[0].courses[0].exam.grade}</td>
// </tr>
// <tr>
// <td>${studymonitor[0].courses[1].name}</td>
// <td class="ec">${studymonitor[0].courses[1].ec}</td>
// <td>${studymonitor[0].courses[1].exam.type}</td>
// <td class="grade">${studymonitor[0].courses[1].exam.grade}</td>
// </tr>
// <tr>
// <td>${studymonitor[0].courses[2].name}</td>
// <td class="ec">${studymonitor[0].courses[2].ec}</td>
// <td>${studymonitor[0].courses[2].exam.type}</td>
// <td class="grade">${studymonitor[0].courses[2].exam.grade}</td>
// </tr>
// <tr>
//   <td rowspan="2">${studymonitor[1].name}</td>
//   <td rowspan="2">${studymonitor[1].courses[0].name}</td>
//   <td class="ec"rowspan="2">${studymonitor[1].courses[0].ec}</td>
//   <td>${studymonitor[1].courses[0].exam[0].type}</td>
//   <td class="grade">${studymonitor[1].courses[0].exam[0].grade}</td>
// </tr>
// <tr>
//   <td>${studymonitor[1].courses[0].exam[1].type}</td>
//   <td class="grade">${studymonitor[1].courses[0].exam[1].grade}</td>
// </tr>
// <tr>
//   <td rowspan="4">${studymonitor[2].name}</td>
//   <td>Framework Development 1</td>
//   <td class="ec">5</td>
//   <td>Case study</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td rowspan="3">Framework Project 1</td>
//   <td class="ec"rowspan="3">7,5</td>
//   <td>Project (33%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>Case study exam (33%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>Report (33%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td rowspan="3">${studymonitor[3].name}</td>
//   <td rowspan="3">Framework Development 2</td>
//   <td class="ec"rowspan="3">10</td>
//   <td>Portfolio (50%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>Project (25%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>Assessment (25%)</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>${studymonitor[4].name}</td>
//   <td>Personal Professional Development</td>
//   <td class="ec">12.5</td>
//   <td>Portfolio</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td rowspan="2">${studymonitor[5].name}</td>
//   <td>Personality 1</td>
//   <td class="ec">1.25</td>
//   <td>Portfolio</td>
//   <td class="grade">Unknown</td>
// </tr>
// <tr>
//   <td>Personality 2</td>
//   <td class="ec">1.25</td>
//   <td>Portfolio</td>
//   <td class="grade">Unknown</td>
// </tr>`;
