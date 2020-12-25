import {mock} from '../modules/mocks';
import {renderTasks} from "./render-tasks";

const deleteBoard = (blocks) => {
  const dataMock = mock();

  dataMock.parseTasks.forEach((task, i) => {
    blocks[i].querySelector('.main-block__delete').addEventListener('click', (event) => {
      event.preventDefault();

      dataMock.parseTasks.splice(task, 1);
      localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

      renderTasks(blocks);
    })
  });
};

export {deleteBoard};
