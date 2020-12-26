import {mock} from '../modules/mocks';
import {createMainTask} from '../views/create-main-task';
import {controlFirstTask} from './control-first-task';
import {createDropdownTask} from '../views/create-dropdown-tasks';
import {deleteBoard} from './delete-board';

const renderTasks = (blocks) => {
  const wrapper = document.querySelector('.main__wrapper');
  const dataMock = mock();

  localStorage.setItem('id-count', dataMock.idCount);
  localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

  wrapper.innerHTML = '';

  dataMock.parseTasks.forEach(elem => Object.keys(elem).forEach(key => {
    createMainTask(wrapper, key);

    const bodyBlock = document.querySelector(`[data-block=${key}] .main-block__body`);

    bodyBlock.innerHTML = '';

    elem[key].forEach(task => {
      const taskText = document.createElement('p');
      taskText.className = 'main-block__txt';
      taskText.innerText = task.title;
      bodyBlock.insertAdjacentElement('beforeend', taskText);
    });
  }));

  deleteBoard(blocks);
  createDropdownTask(blocks);
  controlFirstTask(blocks, dataMock);
}

export {renderTasks};