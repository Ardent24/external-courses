import {mock} from '../modules/mocks';
import {renderTasks} from '../controllers/render-tasks';

const createModal = (wrapper, blocks) => {
  const dataMock = mock();
  const modal = document.createElement('div');
  const modalBlock = document.createElement('div');
  const modalContainer = document.createElement('div');
  const btn = document.createElement('button');
  const title = document.createElement('h2');
  const input = document.createElement('input');

  modal.className = 'modal';
  modalBlock.className = 'modal__block';
  modalContainer.className = 'modal__container';
  btn.className = 'modal__close';
  title.className = 'modal__title';
  input.className = 'modal__input';

  btn.innerHTML = '&times;';
  title.innerText = 'Enter Board Name';
  input.placeholder = 'Kanbane name';

  wrapper.appendChild(modal);
  modal.appendChild(modalBlock);
  modalBlock.appendChild(modalContainer);
  modalContainer.appendChild(btn);
  modalContainer.appendChild(title);
  modalContainer.appendChild(input);

  input.addEventListener('blur', () => {
    const obj = {};
    obj[input.value] = [];

    if (input.value) {
      dataMock.parseTasks.unshift(obj);
      localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));

      input.value = '';
      renderTasks(blocks);
    }

    modal.classList.remove('active');
    modalBlock.classList.remove('active');
  })

  return {
    open: () => {
      modal.classList.add('active');
      modalBlock.classList.add('active');
      input.focus();
    },
    close: () => {
      modal.classList.remove('active');
      modalBlock.classList.remove('active');
    },
  }
}

export {createModal};
