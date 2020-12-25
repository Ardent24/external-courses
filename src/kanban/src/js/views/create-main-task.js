import img from '/img/basket.png';

const createMainTask = (wrapper, title) => {
  wrapper.insertAdjacentHTML('beforeend', `
    <div class="main-block" data-block="${title}">
     <a href="#" class="hover-opacity main-block__delete"><img src="${img}" class="main-block__pic" alt=""></a>
    <header class="main-block__header">
      <h2 class="main-block__title">${title}</h2>
      <div class="main-block__box">
       <button class="main-block__dots">
        <span class="main-block__dot"></span>
        <span class="main-block__dot"></span>
        <span class="main-block__dot"></span>
        </button>
   
      </div>
      
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

export {createMainTask};
