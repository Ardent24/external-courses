const LS_NAME_TASKS = 'tasks';
const LS_NAME_COUNT = 'id-count';

const initialData = {
  backlog: [
    {
      id: 0,
      title: 'task1',
    },
    {
      id: 1,
      title: 'task2',
    },
    {
      id: 2,
      title: 'task3',
    },
    {
      id: 3,
      title: 'task4',
    },
    {
      id: 4,
      title: 'task5',
    },
  ],
  ready: [
    {
      id: 3,
      title: 'task3',
    },
    {
      id: 4,
      title: "task4",
    },
  ],
  inProgress: [],
  finished: [],
};

if (!localStorage.getItem(LS_NAME_TASKS)) {
  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(initialData));
  localStorage.setItem(LS_NAME_COUNT, '5');
}

const tasksString = localStorage.getItem('tasks');
const LS_TASKS = JSON.parse(tasksString);
let idCount = +localStorage.getItem(LS_NAME_COUNT);

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
  localStorage.setItem('tasks', JSON.stringify(LS_TASKS));

  //возвращаем перечисляемые свойства
  Object.keys(LS_TASKS).forEach(key => {
    blocks[key].innerHTML = '';
    LS_TASKS[key].forEach(task => {
      const taskText = document.createElement('p');
      taskText.className = 'main-block__txt';
      taskText.innerText = task.title;
      blocks[key].insertAdjacentElement('beforeend', taskText);
    });
  });
  taskBlockOrder.forEach((key, i) => {
    const nextKey = taskBlockOrder[i + 1];

    if (!nextKey) return;
    if (LS_TASKS[key].length) {
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

        LS_TASKS[key].push({id: idCount += 1, title: input.value});
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

    LS_TASKS[prevBlock].forEach(({title, id}) => {
      const item = document.createElement('li');

      item.className = 'main-block__item';
      item.innerText = title;
      item.setAttribute('data-id', id)
      dropdown.appendChild(item);
      dropdown.animate([
        {transform: 'translate(0, -80px)'},
        {transform: 'translate(0, 0)'}
      ], {duration: 50});

      item.addEventListener('click', (event) => {
        const taskIndex = LS_TASKS[prevBlock].findIndex(({id}) => +id === +event.target.getAttribute('data-id'));

        LS_TASKS[key] = [...LS_TASKS[key], ...LS_TASKS[prevBlock].splice(taskIndex, 1),];
        dropdown.remove();
        btnBlocks[key].disabled = false;
        renderTasks();
      });
    });

    btnBlocks[key].insertAdjacentElement('afterend', dropdown);
  });
})

renderTasks();





