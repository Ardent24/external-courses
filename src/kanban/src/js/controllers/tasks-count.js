import mock from "../modules/mocks";

const taskCount = () => {
  const activeTasks = document.querySelector('.active-task__js');
  const finishTasks = document.querySelector('.finish-task__js');
  const dataMock = mock();

  activeTasks.innerText = '';
  finishTasks.innerText = '';

  let countActive = 0;
  let countFinish = 0;

  Object.keys(dataMock.parseTasks).forEach(key => {
    if (key !== 'finished') {
      dataMock.parseTasks[key].forEach(() => countActive++);
    } else {
      dataMock.parseTasks[key].forEach(() => countFinish++);
    }
  });

  activeTasks.innerText = countActive;
  finishTasks.innerText = countFinish;
}

export default taskCount;