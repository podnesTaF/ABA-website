const wrapper = document.querySelector('.goals-overview');
const goals = wrapper.querySelectorAll('.item');

window.addEventListener('scroll', () => {

    goals.forEach((goal,i ) => {
        let value = wrapper.getBoundingClientRect().top
        if(value > 0 && i !== 1){
          goal.style.transform = `translateX(${value * 2.2}px)`
        } else if(i === 1 && value > 0){
          goal.style.transform = `translateX(-${value * 2.2}px)`
        } else {
            goal.style.transform = `translateX(0)`
        }
    })

})
