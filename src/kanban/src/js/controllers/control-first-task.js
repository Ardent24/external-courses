import {renderTasks} from './render-tasks';
import {tasksCount} from "./tasks-count"

const controlFirstTask = (blocks, dataMock) => {
  const firstBlock = blocks[0];

  firstBlock.querySelector('.main-block__btn').addEventListener('click', () => {
    const input = document.createElement('input');
    const taskText = document.createElement('p');

    taskText.className = 'main-block__txt';
    input.className = 'main-block__inp';
    firstBlock.children[1].appendChild(taskText);
    taskText.appendChild(input);

    input.focus();

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.remove();

        return renderTasks(blocks);
      }

      Object.values(dataMock.parseTasks[0])[0].push({id: dataMock.idCount += 1, title: input.value});

      localStorage.setItem('id-count', dataMock.idCount);
      localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

      input.remove();

      tasksCount(dataMock);
      return renderTasks(blocks);
    });
  });
}

export {controlFirstTask};