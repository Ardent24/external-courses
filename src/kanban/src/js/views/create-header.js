import img from '/img/user-avatar.jpg';

const createHeader = app => {
  app.insertAdjacentHTML('afterbegin', `
 <header class="header">
    <div class="header__wrapper wrapper">
      <div class="header__box">
        <svg class="header__box__icon">
          <use xlink:href="#title-icon"></use>
        </svg>
        <h1 class="header-title">Awesome Kanban Board</h1>
      </div>
      <div class="header-users">
        <button class="header-btn hover-opacity">
          <svg class="header-btn__icon">
            <use xlink:href="#add"></use>
          </svg>
          Create new list</button>
        <div class="header-avatar hover-opacity header-avatar__js">
          <img src="${img}" class="header-avatar__pic" alt="avatar">
          <svg class="header-avatar__icon">
            <use xlink:href="#arrow"></use>
          </svg>
        </div>
      </div>
    </div>
  </header>
`)
}

export {createHeader};