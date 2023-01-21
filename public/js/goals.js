const wrapper = document.querySelector('.goals__overview');
const goals = document.querySelectorAll('.goals__overview--item');



window.addEventListener('scroll', (e) => {
    if(window.innerWidth > 992) {
        goals.forEach((goal, i) => {
            let value = wrapper.getBoundingClientRect().top
            console.log(value);
            if (value > 0 && i !== 1) {
                goal.style.transform = `translateX(${value * 2.2}px)`
            } else if (i === 1 && value > 0) {
                goal.style.transform = `translateX(-${value * 2.2}px)`
            } else {
                goal.style.transform = `translateX(0)`
            }
        })
    }
})
