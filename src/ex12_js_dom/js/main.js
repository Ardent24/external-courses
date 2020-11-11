const arrayImg = document.getElementsByClassName('slider-img');
const btnPrev = document.querySelector('.slider-prev');
const btnNext = document.querySelector('.slider-next');

let count = 0;

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();

    if (btnPrev == event.target) btnNext.focus();
    if (btnNext == event.target) btnPrev.focus();
  }
});


btnPrev.addEventListener('click', () => {
  arrayImg[count].classList.remove('active');
  count--;
  if (count < 0) count = arrayImg.length - 1;
  arrayImg[count].classList.add('active');
});

btnNext.addEventListener('click', () => {
  arrayImg[count].classList.remove('active');
  count++;
  if (count >= arrayImg.length) count = 0;
  arrayImg[count].classList.add('active');
});

