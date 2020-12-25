const mock = () => {
  const LS_NAME_TASKS = 'tasks';
  const taskCount = 'id-count';

  const initialData = [
    {
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
    },
    {
      ready: [
        {
          id: 3,
          title: 'task3',
        },
        {
          id: 4,
          title: 'task4',
        },
      ],
    },
    {
      inProgress: [],
    },
    {
      finished: [],
    },
  ];

  if (!localStorage.getItem(LS_NAME_TASKS)) {
    localStorage.setItem(LS_NAME_TASKS, JSON.stringify(initialData));
    localStorage.setItem(taskCount, '5');
  }

  const tasksString = localStorage.getItem('tasks');
  const parseTasks = JSON.parse(tasksString);
  let idCount = +localStorage.getItem(taskCount);

  return {parseTasks, idCount};
}

export {mock};
