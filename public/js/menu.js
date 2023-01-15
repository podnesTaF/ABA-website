const menu = document.querySelector('.menu');
const openBtn = document.querySelector('.burger');
const close = document.querySelector('.close');
const overlay = document.querySelector('.menu__overlay');
const menuLi = menu.querySelectorAll('.menu li');

openBtn.addEventListener('click', () => {
    menu.style.animation = 'openMenu 0.4s';
    document.body.style.overflowY = 'hidden';
    menu.style.display = 'block';
    overlay.style.display = 'block';
});

const closeMenu = () => {
    menu.style.animation = 'closeMenu 0.4s';
    document.body.style.overflowY = 'initial';
    overlay.style.display = 'none';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 400);
};

close.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

menuLi.forEach((li) => {
    li.addEventListener('click', closeMenu);
});
