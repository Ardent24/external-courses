export default app => {
  const mainElem = document.createElement('main');
  const divElem = document.createElement('div');

  mainElem.className = 'main';
  divElem.className = 'main__wrapper wrapper';
  app.appendChild(mainElem);
  mainElem.appendChild(divElem);

  return;
//   app.insertAdjacentHTML('beforeend', `
//    <main class="main">
//     <div class="main__wrapper wrapper">
// <!--      <div class="main-block" data-block="backlog">-->
// <!--        <header class="main-block__header">-->
// <!--          <h2 class="main-block__title">Backlog</h2>-->
// <!--          <div class="main-block__dots">-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--          </div>-->
// <!--        </header>-->
// <!--        <div class="main-block__body"></div>-->
// <!--        <footer class="main-block__footer">-->
// <!--          <button class="main-block__btn">-->
// <!--            <svg class="main-block__icon">-->
// <!--              <use xlink:href="#add-plus"></use>-->
// <!--            </svg>-->
// <!--            Add card-->
// <!--          </button>-->
// <!--        </footer>-->
// <!--      </div>-->
// <!--      <div class="main-block" data-block="ready">-->
// <!--        <header class="main-block__header">-->
// <!--          <h2 class="main-block__title">ready</h2>-->
// <!--          <div class="main-block__dots">-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--          </div>-->
// <!--        </header>-->
// <!--        <div class="main-block__body"></div>-->
// <!--        <footer class="main-block__footer">-->
// <!--          <button class="main-block__btn">-->
// <!--            <svg class="main-block__icon">-->
// <!--              <use xlink:href="#add-plus"></use>-->
// <!--            </svg>-->
// <!--            Add card-->
// <!--          </button>-->
// <!--        </footer>-->
// <!--      </div>-->
// <!--      <div class="main-block" data-block="inProgress">-->
// <!--        <header class="main-block__header">-->
// <!--          <h2 class="main-block__title">in Progress</h2>-->
// <!--          <div class="main-block__dots">-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--          </div>-->
// <!--        </header>-->
// <!--        <div class="main-block__body"></div>-->
// <!--        <footer class="main-block__footer">-->
// <!--          <button class="main-block__btn">-->
// <!--            <svg class="main-block__icon">-->
// <!--              <use xlink:href="#add-plus"></use>-->
// <!--            </svg>-->
// <!--            Add card-->
// <!--          </button>-->
// <!--        </footer>-->
// <!--      </div>-->
// <!--      <div class="main-block" data-block="finished">-->
// <!--        <header class="main-block__header">-->
// <!--          <h2 class="main-block__title">finished</h2>-->
// <!--          <div class="main-block__dots">-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--            <span class="main-block__dot"></span>-->
// <!--          </div>-->
// <!--        </header>-->
// <!--        <div class="main-block__body"></div>-->
// <!--        <footer class="main-block__footer">-->
// <!--          <button class="main-block__btn">-->
// <!--            <svg class="main-block__icon">-->
// <!--              <use xlink:href="#add-plus"></use>-->
// <!--            </svg>-->
// <!--            Add card-->
// <!--          </button>-->
// <!--        </footer>-->
// <!--      </div>-->
//     </div>
//   </main>
//   `)
}