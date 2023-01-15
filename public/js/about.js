/** @format */

const items = document.querySelectorAll('.about__items>.item');
const previews = document.querySelectorAll('.preview');


previews.forEach((preview, i) => {
  preview.addEventListener('click', () => {
    let currActive;
    items.forEach((item, i) => {
      if (item.classList.contains('active')) {
        currActive = i;
      }
    });
    items[currActive].classList.remove('active');
    items[i].classList.add('active');
  });
});


