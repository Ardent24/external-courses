import {mock} from '../modules/mocks';
import {renderTasks} from '../controllers/render-tasks';

const createDropdownTask = (blocks) => {
  const dataMock = mock();

  dataMock.parseTasks.forEach((task, i, array) => {
    if (i === blocks.length - 1) return;

    const btnBlock = blocks[i + 1].querySelector('.main-block__btn');
    const dropdownElem = document.createElement('ul');

    dropdownElem.className = 'main-block__list';

    btnBlock.disabled = (!Object.values(task)[0].length) ? true : false;

    Object.values(task)[0].forEach(({title, id}) => {
      const liElem = document.createElement('li');

      liElem.className = 'main-block__item';
      liElem.innerText = title;
      liElem.setAttribute('data-id', id);

      dropdownElem.appendChild(liElem);

      liElem.addEventListener('click', (event) => {
        const taskIndex = Object.values(array[i])[0].findIndex(({id}) => +id === +event.target.getAttribute('data-id'));
        const obj = {id: liElem.getAttribute('data-id'), title: liElem.innerText};

        Object.values(dataMock.parseTasks[i])[0].splice(taskIndex, 1);
        Object.values(dataMock.parseTasks[i + 1])[0].push(obj);
        localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

        btnBlock.disabled = false;
        renderTasks(blocks);
      })
    })

    btnBlock.addEventListener('click', () => {
      dropdownElem.classList.add('active');
    });

    blocks[i + 1].insertAdjacentElement('beforeend', dropdownElem);
  });
}

export {createDropdownTask};