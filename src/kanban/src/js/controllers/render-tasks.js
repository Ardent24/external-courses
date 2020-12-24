import mocks from '../modules/mocks';
import createTask from '../views/create-main-task';
import controlFirstTask from './control-first-task'

const renderTasks = (blocks) => {
  const wrapper = document.querySelector('.main__wrapper');
  const dataMock = mocks();

  localStorage.setItem('id-count', dataMock.idCount);
  localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

  wrapper.innerHTML = "";

  Object.keys(dataMock.parseTasks).forEach((key) => {
    createTask(wrapper, key);

    const bodyBlock = document.querySelector(`[data-block=${key}] .main-block__body`);

    bodyBlock.innerHTML = '';
    dataMock.parseTasks[key].forEach(task => {
      const taskText = document.createElement('p');
      taskText.className = 'main-block__txt';
      taskText.innerText = task.title;
      bodyBlock.insertAdjacentElement('beforeend', taskText);
    });
  })

  return controlFirstTask(blocks, dataMock);
}

export default renderTasks;