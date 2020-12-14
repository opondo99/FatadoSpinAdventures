const contactUs = document.querySelector(".action");
const contactForm = document.querySelector(".contact-form");
const closeForm = document.querySelector(".close-form");

const burger = document.querySelector(".humburger");
const closeNav = document.querySelector(".close");

const tl = new TimelineLite({paused:true});
const tl2 = new TimelineLite({paused:true});

tl.to('.contact-form', 1, {
  top: '15vmin',
  ease: Power2.easeOut
});

tl2.to('.drop-down', .5, {
  top: "5vh",
  ease: Power2.easeOut
},"+=.7s").to('.humburger', .3, {
  opacity: '0',
  ease: Power2.ease
},"+=.5s").to('.close', .4, {
  display: 'block',
  ease: Power2.ease
});



contactUs.addEventListener('click', () => {
  tl.play();
});

closeForm.addEventListener('click', () => {
  tl.reverse();
})

burger.addEventListener('click', () => {
  tl2.play()
});

closeNav.addEventListener('click', () => {
  tl2.reverse()
})


