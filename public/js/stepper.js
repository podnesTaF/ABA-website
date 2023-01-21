const stepperItems = document.querySelectorAll('.stepper__wrapper--list--item');
const contentItems = document.querySelectorAll('.stepper__content--item');
const descs = stepperItems.querySelectorAll('p');

let stepperIdx = 0
stepperItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        stepperItems[stepperIdx].classList.remove('active');
        descs[stepperIdx].classList.remove('active');
        contentItems[stepperIdx].classList.remove('active');


        if(i === 0) {
            contentItems[i].style.animation = 'slideLeft 0.4s';
        } else {
            contentItems[i].style.animation = 'slideRight 0.4s';
        }
        item.classList.add('active');
        descs[i].classList.add('active');
        contentItems[i].classList.add('active');
        stepperIdx = i;


    });
})