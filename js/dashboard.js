const studymonitor = [
  {
    name: '1',
    courses: [
      {
        name: 'Program and Career Orientation',
        ec: 2.5,
        exam: [{ grade: 9.8, type: 'Assesment exam' }]
      },
      {
        name: 'Computer Science Basics',
        ec: 5,
        exam: [{ grade: 9.1, type: 'Written exam' }]
      },
      {
        name: 'Programming Basics',
        ec: 5,
        exam: [{ grade: 9.6, type: 'Case study exam' }]
      }
    ]

  },

  {
    name: '2',
    courses: [
      {
        name: 'Object Oriented Programming',
        ec: 10,
        exam: [
          { grade: 10, type: 'Case study (50%)', percentage: 0.5 },
          { grade: 8.5, type: 'Project (50%)', percentage: 0.5 }]
      }
    ]

  },

  {
    name: '3',
    courses: [
      {
        name: 'Framework Development 1',
        ec: 5,
        exam: [{ grade: 8.8, type: 'Case study' }]
      },
      {
        name: 'Framework Project 1',
        ec: 7.5,
        exam: [
          { grade: 'Unknown', type: 'Project (33%)', percentage: (1 / 3) },
          { grade: 'Unknown', type: 'Case study exam (33%)', percentage: (1 / 3) },
          { grade: 'Unknown', type: 'Report (33%)', percentage: (1 / 3) }]
      }
    ]

  },

  {
    name: '4',
    courses: [
      {
        name: 'Framework Project 2',
        ec: 10,
        exam: [
          { grade: 'Unknown', type: 'Portfolio (50%)', percentage: 0.5 },
          { grade: 'Unknown', type: 'Project (25%)', percentage: 0.25 },
          { grade: 'Unknown', type: 'Assesment (25%)', percentage: 0.25 }
        ]
      }
    ]

  },

  {
    name: 'Year',
    courses: [
      {
        name: 'Personal Professional Development',
        ec: 12.5,
        exam: [{ grade: 'Unknown', type: 'Portfolio' }]
      }
    ]

  },

  {
    name: 'Whenever',
    courses: [
      {
        name: 'Personality 1',
        ec: 1.25,
        exam: [{ grade: 'Unknown', type: 'Portfolio' }]
      },
      {
        name: 'Personality 2',
        ec: 1.25,
        exam: [{ grade: 'Unknown', type: 'Portfolio' }]
      }
    ]

  }
];

function tableRender () {
  const table = document.getElementById('gradetable');
  table.classList.add('centertext');
  const headers = ['Quartile', 'Course', 'Ec', 'Exam', 'Grade'];
  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement('th');
    th.textContent = headers[i];
    table.appendChild(th);
  }
  for (let i = 0; i < studymonitor.length; i++) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = studymonitor[i].name;

    for (let j = 0; j < studymonitor[i].courses.length; j++) {
      if (j === 0) {
        let rowspan = 0;
        for (let m = 0; m < studymonitor[i].courses.length; m++) {
          for (let l = 0; l < studymonitor[i].courses[m].exam.length; l++) {
            rowspan++;
          };
        }
        td1.setAttribute('rowspan', rowspan);
        tr.appendChild(td1);
      }
      for (let k = 0; k < studymonitor[i].courses[j].exam.length; k++) {
        if (j > 0) {
          if (k >= 1) {
            const tr3 = document.createElement('tr');
            const td4 = document.createElement('td');
            td4.textContent = studymonitor[i].courses[j].exam[k].type;
            const td5 = document.createElement('td');
            td5.textContent = studymonitor[i].courses[j].exam[k].grade;
            td5.classList.add('grade');
            td5.setAttribute('id', `${i}/${j}/${k}`);
            tr3.appendChild(td4);
            tr3.appendChild(td5);
            table.appendChild(tr3);
          } else {
            const tr2 = document.createElement('tr');
            const td2 = document.createElement('td');
            td2.textContent = studymonitor[i].courses[j].name;
            const td3 = document.createElement('td');
            td3.textContent = studymonitor[i].courses[j].ec;
            if (studymonitor[i].courses[j].exam.length >= 1) {
              td2.setAttribute('rowspan', studymonitor[i].courses[j].exam.length);
              td3.setAttribute('rowspan', studymonitor[i].courses[j].exam.length);
            }
            const td4 = document.createElement('td');
            td4.textContent = studymonitor[i].courses[j].exam[k].type;
            const td5 = document.createElement('td');
            td5.textContent = studymonitor[i].courses[j].exam[k].grade;
            td5.classList.add('grade');
            td5.setAttribute('id', `${i}/${j}/${k}`);
            tr2.appendChild(td2);
            tr2.appendChild(td3);
            tr2.appendChild(td4);
            tr2.appendChild(td5);
            table.appendChild(tr2);
          }
        } else {
          if (k >= 1) {
            const tr3 = document.createElement('tr');
            const td4 = document.createElement('td');
            td4.textContent = studymonitor[i].courses[j].exam[k].type;
            const td5 = document.createElement('td');
            td5.textContent = studymonitor[i].courses[j].exam[k].grade;
            td5.classList.add('grade');
            td5.setAttribute('id', `${i}/${j}/${k}`);
            tr3.appendChild(td4);
            tr3.appendChild(td5);
            table.appendChild(tr3);
          } else {
            const td2 = document.createElement('td');
            td2.textContent = studymonitor[i].courses[j].name;
            const td3 = document.createElement('td');
            td3.textContent = studymonitor[i].courses[j].ec;
            if (studymonitor[i].courses[j].exam.length >= 1) {
              td2.setAttribute('rowspan', studymonitor[i].courses[j].exam.length);
              td3.setAttribute('rowspan', studymonitor[i].courses[j].exam.length);
            }
            const td4 = document.createElement('td');
            td4.textContent = studymonitor[i].courses[j].exam[k].type;
            const td5 = document.createElement('td');
            td5.textContent = studymonitor[i].courses[j].exam[k].grade;
            td5.classList.add('grade');
            td5.setAttribute('id', `${i}/${j}/${k}`);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);
          }
        }
      }
    }
  }
}

function calculateEc () {
  let ec = 0;
  let coursesuccess = 0;
  for (let i = 0; i < studymonitor.length; i++) {
    for (let j = 0; j < studymonitor[i].courses.length; j++) {
      for (let k = 0; k < studymonitor[i].courses[j].exam.length; k++) {
        if (studymonitor[i].courses[j].exam[k].grade >= 5.5) {
          coursesuccess++;
          if (coursesuccess === studymonitor[i].courses[j].exam.length) {
            ec += studymonitor[i].courses[j].ec;
          }
        }
      }
      coursesuccess = 0;
    }
  }
  progressbar(ec);
}

function progressbar (ec) {
  const nbsa = document.getElementById('NBSA');
  nbsa.textContent = `NBSA: ${ec}/45`;

  const css = document.querySelector(':root');
  const progressy1 = ec / 60 * 100;
  const progressoveral = ec / 240 * 100;
  if (progressy1 >= 100) {
    css.style.setProperty('--progressy1color', 'green');
  } else if (progressy1 >= 90) {
    css.style.setProperty('--progressy1color', 'blue');
  } else if (progressy1 >= 75) {
    css.style.setProperty('--progressy1color', 'yellow');
  } else {
    css.style.setProperty('--progressy1color', 'red');
  }
  css.style.setProperty('--progressy1', progressy1 + '%');
  css.style.setProperty('--progressoveral', progressoveral + '%');
}

function GradeListener () {
  const grade = document.querySelectorAll('.grade');
  for (let i = 0; i < grade.length; i++) {
    grade[i].addEventListener('click', function () {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('value', grade[i].textContent);
      input.classList.add('input');
      grade[i].textContent = '';
      grade[i].appendChild(input);
      input.focus();
      input.addEventListener('blur', function () {
        const id = grade[i].getAttribute('id');
        const idarray = id.split('/');
        const ijk = idarray[0];
        const jkl = idarray[1];
        const klm = idarray[2];
        if (((input.value) * 1) === 0 || (isNaN(input.value))) {
          studymonitor[ijk].courses[jkl].exam[klm].grade = 'Unknown';
          grade[i].textContent = 'Unknown';
        } else {
          studymonitor[ijk].courses[jkl].exam[klm].grade = input.value;
          grade[i].textContent = input.value;
        }
        calculateEc();
        input.remove();
      });
    });
  }
}

window.addEventListener('load', function () {
  tableRender();
  calculateEc();
  GradeListener();
}
);
