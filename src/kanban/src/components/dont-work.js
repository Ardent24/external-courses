// const dataMock = [
//   {
//     title: 'backlog',
//     issues: [
//       {
//         id: '1',
//         name: 'backlog1',
//       },
//       {
//         id: '2',
//         name: 'backlog2',
//       },
//       {
//         id: '3',
//         name: 'backlog3',
//       },
//     ],
//   },
//   {
//     title: 'ready',
//     issues: [
//       {
//         id: '1',
//         name: 'ready1',
//       },
//       {
//         id: '2',
//         name: 'ready2',
//       },
//     ],
//   },
//   {
//     title: 'in Progress',
//     issues: [
//       // {
//       //   id: '1',
//       //   name: 'Progress1',
//       // },
//     ],
//   },
//   {
//     title: 'Finished',
//     issues: [
//       // {
//       //   id: '1',
//       //   name: 'Finished1',
//       // },
//     ],
//   }
// ];
// if (!localStorage.getItem('localTasks')) {
//   localStorage.setItem('localTasks', JSON.stringify(dataMock));
// }
// const dataMockLocal = JSON.parse(localStorage.getItem('localTasks'));
//
// const [backlog, ready, inProgress, finished] =
//   ['backlog', 'ready', 'inProgress', 'finished'].map(item => document.querySelector(`[data-block=${item}]`));
// const [backlogBtn, readyBtn, inProgressBtn, finishedBtn] =
//   [backlog, ready, inProgress, finished].map(item => item.querySelector('.main-block__btn'));
//
// const arrayBlocks = [backlog, ready, inProgress, finished];
//
// for (let i = 0; i < arrayBlocks.length; i++) {
//   const wrapperTasks = arrayBlocks[i].querySelector('.main-block__btn');
//   dataMockLocal[i].issues.forEach((task) => {
//     const txt = document.createElement('p');
//     txt.classList.add('main-block__txt');
//     txt.innerText = task.name;
//     wrapperTasks.insertAdjacentElement('beforebegin', txt);
//   });
//   activationBtn(i);
// }
// for (let i = 1; i < arrayBlocks.length; i++) {
//   const btnArray = arrayBlocks[i].querySelector('.main-block__btn');
//   const wrapperList = arrayBlocks[i].querySelector('.main-block__list');
//   btnArray.addEventListener('click', (event) => {
//     event.stopPropagation();
//     wrapperList.classList.add('active');
//   });
// }
// for (let i = 0; i < arrayBlocks.length - 1; i++) {
//   const wrapperList = arrayBlocks[i + 1].querySelector('.main-block__list');
//   dataMockLocal[i].issues.forEach((task) => {
//     const li = document.createElement('li');
//     li.classList.add('main-block__item');
//     li.innerText = task.name;
//     wrapperList.insertAdjacentElement('beforeend', li);
//   });
// }
// const addNewTaskBacklog = () => {
//   backlogBtn.addEventListener('click', (event) => {
//     const txt = document.createElement('p');
//     const inp = document.createElement('input');
//     inp.classList.add('main-block__inp');
//     txt.classList.add('main-block__txt');
//     backlogBtn.insertAdjacentElement('beforebegin', txt);
//     txt.appendChild(inp);
//     inp.focus();
//     // eslint-disable-next-line consistent-return
//     inp.addEventListener('blur', () => {
//       if (inp.value == '') return txt.remove();
//       addTaskDataMockLocal(0, inp.value);
//       const li = document.createElement('li');
//       li.classList.add('main-block__item');
//       li.innerText = inp.value;
//       ready.querySelector('.main-block__list').insertAdjacentElement('beforeend', li);
//       modificationDom();
//     });
//   });
// }
// addNewTaskBacklog();
//
// function modificationDom() {
//   for (let i = 1; i < arrayBlocks.length; i++) {
//     const btnTasks = arrayBlocks[i].querySelector('.main-block__btn');
//     const itemTasks = arrayBlocks[i].querySelectorAll('.main-block__item');
//     for (let k = 0; k < itemTasks.length; k++) {
//       itemTasks[k].addEventListener('click', () => {
//         const txt = document.createElement('p');
//         txt.classList.add('main-block__txt');
//         txt.innerText = itemTasks[k].innerText;
//         btnTasks.insertAdjacentElement('beforebegin', txt);
//         itemTasks[k].remove();
//         addTaskDataMockLocal(i, itemTasks[k].innerText);
//         activationBtn(i);
//         deleteTaskFromDataMockLocal(dataMockLocal[i - 1].title, dataMockLocal[i - 1].issues[k].id);
//         deleteLastTaskWithDom(i, k);
//         // addItemNextDropdown(i, itemTasks[k].innerText);
//       })
//     }
//   }
// };
// modificationDom();
//
// function addTaskDataMockLocal(num, name) {
//   const obj = {};
//   obj.id = `${dataMockLocal[num].issues.length + 1}`;
//   obj.name = name;
//   dataMockLocal[num].issues.push(obj);
//   localStorage.setItem('localTasks', JSON.stringify(dataMockLocal));
// }
//
// function deleteTaskFromDataMockLocal(title, issueId) {
//   const block = dataMockLocal.find(block => block.title === title);
//   block.issues = block.issues.filter(issue => issue.id !== issueId);
//   localStorage.setItem('localTasks', JSON.stringify(dataMockLocal));
// }
//
// function activationBtn(num) {
//   if (num < 3) {
//     const btnTasks = arrayBlocks[num + 1].querySelectorAll('.main-block__btn');
//     if (dataMockLocal[num].issues.length !== 0) {
//       btnTasks.forEach(btn => btn.disabled = false);
//     }
//   }
// }
//
// function deleteLastTaskWithDom(num, task) {
//   const itemTasks = arrayBlocks[num - 1].querySelectorAll('.main-block__txt');
//   itemTasks[task].remove();
// }
//
// function addItemNextDropdown(num, text) {
//   const li = document.createElement('li');
//   li.classList.add('main-block__item');
//   li.innerText = text;
//   arrayBlocks[num + 1].querySelector('.main-block__list').insertAdjacentElement('beforeend', li);
// }
//
// document.addEventListener('click', (event) => {
//   document.querySelectorAll('.main-block__list').forEach(list => {
//     if (list.classList.contains('active')) {
//       list.classList.remove('active');
//     }
//   })
// })
