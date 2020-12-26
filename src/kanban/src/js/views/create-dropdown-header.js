const createDropdownHeader = () => {
  const boxDropdown = document.querySelector('.header-users');
  const dropdown = document.createElement('ul');

  dropdown.classList.add('header-dropdown');
  dropdown.insertAdjacentHTML('afterbegin', `
        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My account</a></li>
        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">My tasks</a></li>
        <li class="header-dropdown__item"><a class="header-dropdown__link" href="#">Log out</a></li>
  `);
  boxDropdown.appendChild(dropdown);

  return {
    open: () => dropdown.classList.add('active'),
    close: () => dropdown.classList.remove('active'),
  }
}

export {createDropdownHeader};
