const btnAvatar = document.querySelector('.header-avatar__js');
const arrowAvatar = btnAvatar.querySelector('.header-avatar__icon');
const boxDropdown = document.querySelector('.header-users');
const createDropdown = (items = 3) => {
  const ul = document.createElement('ul');
  const allLinks = boxDropdown.getElementsByClassName('header-dropdown__link');

  ul.classList.add('header-dropdown');
  boxDropdown.appendChild(ul);
  for (let i = 0; i < items; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    li.classList.add('header-dropdown__item');
    link.classList.add('header-dropdown__link');
    link.href = '#';
    ul.appendChild(li);
    li.appendChild(link)
  }
  allLinks[0].innerHTML = 'My account';
  allLinks[1].innerHTML = 'My tasks';
  allLinks[2].innerHTML = 'Log out';
};
createDropdown();
const dropdown = boxDropdown.querySelector('.header-dropdown');

btnAvatar.addEventListener('click', () => {
  arrowAvatar.classList.toggle('active');
  dropdown.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target) && !btnAvatar.contains(event.target)) {
    arrowAvatar.classList.remove('active');
    dropdown.classList.remove('active');
  }
})

