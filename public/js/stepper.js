const stepperItems = document.querySelectorAll('.c-stepper__item');
const contentItems = document.querySelectorAll('.step-content .item');


let stepperIdx = 0
stepperItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        // contentItems[stepperIdx].style.animation = 'slideLeft 0.5s ease-in-out;'
        contentItems[stepperIdx].classList.remove('active');
        stepperItems[stepperIdx].classList.remove('active');


        item.classList.add('active');
        contentItems[i].classList.add('active');
        stepperIdx = i;

    });
})