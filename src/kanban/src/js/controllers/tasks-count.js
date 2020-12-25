import {mock} from "../modules/mocks";

const tasksCount = () => {
  const activeTasks = document.querySelector('.active-task__js');
  const finishTasks = document.querySelector('.finish-task__js');
  const dataMock = mock();

  activeTasks.innerText = '';
  finishTasks.innerText = '';

  let countActive = 0;
  let countFinish = 0;

  dataMock.parseTasks.forEach(elem => Object.keys(elem).forEach(key => {
    if (key !== 'finished') {
      elem[key].forEach(() => countActive++);
    } else {
      elem[key].forEach(() => countActive++);
    }
  }));

  activeTasks.innerText = countActive;
  finishTasks.innerText = countFinish;
}

export {tasksCount};
