export default function () {
  const btnAvatar = document.querySelector('.header-avatar__js');
  const arrowAvatar = btnAvatar.querySelector('.header-avatar__icon');
  const boxDropdown = document.querySelector('.header-users');
  const dropdown = document.createElement('ul');
  const controlDropdown = funcDropdown();

  function funcDropdown() {
    dropdown.classList.add('header-dropdown');
    dropdown.insertAdjacentHTML('afterbegin', `
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My account</a></li>
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My tasks</a></li>
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">Log out</a></li>`);
    return {
      create: () => {
        boxDropdown.appendChild(dropdown);
      },
      destroy: () => {
        dropdown.classList.add('hide');
        dropdown.addEventListener('transitionend', () => {
          dropdown.classList.remove('hide')
          dropdown.remove();
        });
      }
    }
  };

  btnAvatar.addEventListener('click', () => {
    if (arrowAvatar.classList.contains('active')) {
      arrowAvatar.classList.remove('active');
      controlDropdown.destroy();
    } else {
      arrowAvatar.classList.add('active');
      controlDropdown.create();
    }
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !btnAvatar.contains(event.target)) {
      arrowAvatar.classList.remove('active');
      controlDropdown.destroy();
    }
  });
}



