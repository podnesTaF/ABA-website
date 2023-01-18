const stepperItems = document.querySelectorAll('.c-stepper__item');
const contentItems = document.querySelectorAll('.step-content .item');
const descs = document.querySelectorAll('.c-stepper__desc');

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