export default function () {
  const tasksString = localStorage.getItem('tasks');
  const parseTasks = JSON.parse(tasksString);
  let idCount = +localStorage.getItem(taskCount);

  const blocks = {
    backlog: document.querySelector('[data-block=backlog] .main-block__body'),
    ready: document.querySelector('[data-block=ready] .main-block__body'),
    inProgress: document.querySelector('[data-block=inProgress] .main-block__body'),
    finished: document.querySelector('[data-block=finished] .main-block__body'),
  };
  const btnBlocks = {
    backlog: document.querySelector('[data-block=backlog] .main-block__footer .main-block__btn'),
    ready: document.querySelector('[data-block=ready] .main-block__footer .main-block__btn'),
    inProgress: document.querySelector('[data-block=inProgress] .main-block__footer .main-block__btn'),
    finished: document.querySelector('[data-block=finished] .main-block__footer .main-block__btn'),
  };
  const taskBlockOrder = ['backlog', 'ready', 'inProgress', 'finished'];

  const renderTasks = () => {
    localStorage.setItem('id-count', `${idCount}`);
    localStorage.setItem('tasks', JSON.stringify(parseTasks));

    //возвращаем перечисляемые свойства
    Object.keys(parseTasks).forEach(key => {
      blocks[key].innerHTML = '';
      parseTasks[key].forEach(task => {
        const taskText = document.createElement('p');
        taskText.className = 'main-block__txt';
        taskText.innerText = task.title;
        blocks[key].insertAdjacentElement('beforeend', taskText);
      });
    });
    taskBlockOrder.forEach((key, i) => {
      const nextKey = taskBlockOrder[i + 1];

      if (!nextKey) return;
      if (parseTasks[key].length) {
        btnBlocks[nextKey].disabled = false;
      } else {
        btnBlocks[nextKey].disabled = true;
      }
    });
  };
  taskBlockOrder.forEach((key) => {
    if (key === 'backlog') {
      btnBlocks[key].addEventListener('click', () => {
        const input = document.createElement('input');
        const taskText = document.createElement('p');

        taskText.className = 'main-block__txt';
        input.className = 'main-block__inp';
        blocks[key].insertAdjacentElement('beforeend', taskText);
        taskText.appendChild(input);
        input.focus();
        input.addEventListener('blur', () => {
          if (!input.value) {
            input.remove();
            return renderTasks();
          }

          parseTasks[key].push({id: idCount += 1, title: input.value});
          input.remove();
          return renderTasks();
        });
      });

      return;
    }

    btnBlocks[key].addEventListener('click', () => {
      const dropdown = document.createElement('ul');
      const blockOrder = taskBlockOrder.findIndex(blockKey => key === blockKey);
      const prevBlock = taskBlockOrder[blockOrder - 1];

      dropdown.className = 'main-block__list';

      parseTasks[prevBlock].forEach(({title, id}) => {
        const item = document.createElement('li');

        item.className = 'main-block__item';
        item.innerText = title;
        item.setAttribute('data-id', id)
        dropdown.appendChild(item);

        item.addEventListener('click', (event) => {
          const taskIndex = parseTasks[prevBlock].findIndex(({id}) => +id === +event.target.getAttribute('data-id'));

          parseTasks[key] = [...parseTasks[key], ...parseTasks[prevBlock].splice(taskIndex, 1),];
          dropdown.remove();
          btnBlocks[key].disabled = false;
          renderTasks();
        });
      });

      btnBlocks[key].insertAdjacentElement('afterend', dropdown);
    });
  })

  renderTasks();
}



