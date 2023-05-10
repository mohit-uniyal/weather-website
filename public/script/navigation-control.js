// navigation control

const toggleButton=document.querySelector('#nav-toggle');
const navigationLinks=document.querySelector('.navigation-links');

toggleButton.addEventListener('click', ()=>{
    navigationLinks.classList.toggle('active');
});