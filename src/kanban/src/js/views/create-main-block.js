const createMainBlock = app => {
  const mainElem = document.createElement('main');
  const divElem = document.createElement('div');

  mainElem.className = 'main';
  divElem.className = 'main__wrapper wrapper';
  app.appendChild(mainElem);
  mainElem.appendChild(divElem);
}

export {createMainBlock};
