const btnAvatar = document.querySelector('.header-avatar__js');
const arrowAvatar = btnAvatar.querySelector('.header-avatar__icon');
const boxDropdown = document.querySelector('.header-users');
const controlDropdown = funcDropdown();

function funcDropdown() {
  const dropdown = document.createElement('ul');
  dropdown.classList.add('header-dropdown');
  return {
    create: () => {
      dropdown.insertAdjacentHTML('afterbegin', `
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My account</a></li>
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My tasks</a></li>
  <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">Log out</a></li>`);
      boxDropdown.appendChild(dropdown);

      document.addEventListener('click', function destroyOutSide (event) {
        if (!dropdown.contains(event.target) && !btnAvatar.contains(event.target)) {
          arrowAvatar.classList.remove('active');
          controlDropdown.destroy();
        }
      });
    },
    destroy: () => {
      dropdown.classList.add('hide');
      setTimeout(()=>{
        dropdown.classList.remove('hide')
        dropdown.innerHTML = "";
      }, 500)
    }
  }
};

btnAvatar.addEventListener('click', () => {
  if (arrowAvatar.classList.contains('active')){
    arrowAvatar.classList.remove('active');
    controlDropdown.destroy();
  } else{
    arrowAvatar.classList.add('active');
    controlDropdown.create();
  }
});



