const burger = document.querySelector(".humburger");
const closeNav = document.querySelector(".close");

const tl2 = new TimelineLite({paused:true});

tl2.to('.drop-down', .5, {
    top: "5vh",
    ease: Power2.easeOut
},"+=.7s").to('.humburger', .3, {
    opacity: '0',
    ease: Power2.ease
},"+=.5s").to('.close', .4, {
    display: 'block',
    ease: Power2.ease
})


burger.addEventListener('click', () => {
    tl2.play()
});

closeNav.addEventListener('click', () => {
    tl2.reverse()
})