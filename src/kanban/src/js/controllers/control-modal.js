const controlModal = (modal) => {
  document.querySelector('.header-btn').addEventListener('click', () => modal.open());
  document.addEventListener('click', (event) => {
    if (document.querySelector('.modal__close').contains(event.target)) modal.close();
  });
}

export {controlModal};
