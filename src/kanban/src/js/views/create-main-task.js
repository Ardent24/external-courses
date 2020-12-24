export default (wrapper, title) => {
  wrapper.insertAdjacentHTML('beforeend', `
    <div class="main-block" data-block="${title}">
    <header class="main-block__header">
      <h2 class="main-block__title">${title}</h2>
      <button class="main-block__dots">
        <span class="main-block__dot"></span>
        <span class="main-block__dot"></span>
        <span class="main-block__dot"></span>
      </button>
    </header>
    <div class="main-block__body"></div>
    <footer class="main-block__footer">
      <button class="main-block__btn">
        <svg class="main-block__icon">
          <use xlink:href="#add-plus"></use>
        </svg> Add card</button>
    </footer>
  </div>
  `)
}