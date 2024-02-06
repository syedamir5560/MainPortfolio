//show menu
const navMenu = document.querySelector('.nav-menu'),
navToggle = document.querySelector('.toggle-button'),
navClose = document.querySelector('.nav-close');


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')

    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-menu')

    })
}