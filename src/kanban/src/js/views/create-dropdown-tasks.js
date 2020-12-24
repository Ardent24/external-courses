import mocks from '../modules/mocks';
import tasksCount from "../controllers/tasks-count"
import renderTasks from '../controllers/render-tasks';

const createDropdownTask = (blocks) => {
  const dataMock = mocks();
  const arrayBlocks = Array.from(blocks);

  Object.values(dataMock.parseTasks).forEach((task, i) => {
    if (i === blocks.length - 1) return;

    const btnBlock = blocks[i + 1].querySelector('.main-block__btn');
    const dropdownElem = document.createElement('ul');

    (task.length) ? btnBlock.disabled = false : btnBlock.disabled = true;

    dropdownElem.className = 'main-block__list';

    task.forEach(({title, id}) => {
      const liElem = document.createElement('li');

      liElem.className = 'main-block__item';
      liElem.innerText = title;
      liElem.setAttribute('data-id', id);
      dropdownElem.appendChild(liElem);

      liElem.addEventListener('click', (event) => {

        // const prevBlock = taskBlockOrder[blockOrder - 1];
        // const taskIndex = parseTasks[prevBlock].findIndex(({id}) => +id === +event.target.getAttribute('data-id'));

        // parseTasks[key] = [...parseTasks[key], ...parseTasks[prevBlock].splice(taskIndex, 1)];
        // dropdown.remove();
        // btnBlocks[key].disabled = false;
        // renderTasks();
      })
    })

    btnBlock.addEventListener('click', () => {
      dropdownElem.classList.add('active');
    });

    blocks[i + 1].insertAdjacentElement('beforeend', dropdownElem);
  });
}

export default createDropdownTask;