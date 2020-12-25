const controlDropdownHeader = (dropdownHeader) => {
  const btnAvatar = document.querySelector('.header-avatar__js');
  const arrowAvatar = btnAvatar.querySelector('.header-avatar__icon');
  const dropdown = document.querySelector('.header-dropdown');

  btnAvatar.addEventListener('click', () => {
    if (arrowAvatar.classList.contains('active')) {
      arrowAvatar.classList.remove('active');
      dropdownHeader.close();
    } else {
      arrowAvatar.classList.add('active');
      dropdownHeader.open();
    }
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !btnAvatar.contains(event.target)) {
      arrowAvatar.classList.remove('active');
      dropdownHeader.close();
    }
  });
}

export {controlDropdownHeader};