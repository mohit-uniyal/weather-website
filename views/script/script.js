const carousel=document.querySelector('.carousel');
const arrows=document.querySelectorAll('.main-image-box i');
const leftArrow=arrows[0];
const rightArrow=arrows[1];

function slideLeft(event){
    carousel.scrollLeft+=carousel.clientWidth;
}

function slideRight(event){
    carousel.scrollLeft-=carousel.clientWidth;
}

leftArrow.addEventListener('click', slideRight);
rightArrow.addEventListener('click', slideLeft);

// navigation control

const toggleButton=document.querySelector('#nav-toggle');
const navigationLinks=document.querySelector('.navigation-links');

toggleButton.addEventListener('click', ()=>{
    navigationLinks.classList.toggle('active');
});