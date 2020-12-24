import mocks from '../modules/mocks';
import renderTasks from '../controllers/render-tasks';

const createModal = (wrapper, blocks) => {
  const dataMock = mocks();
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
    if (!input.value) {
      modal.classList.remove('active');
      modalBlock.classList.remove('active');
    } else {
      dataMock.parseTasks[input.value] = [];
      localStorage.setItem('tasks', JSON.stringify(dataMock.parseTasks));
      console.log(dataMock.parseTasks)
      modal.classList.remove('active');
      modalBlock.classList.remove('active');
      renderTasks(blocks);
    }
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

export default createModal;