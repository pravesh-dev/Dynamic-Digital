let openNav = document.querySelector('#open-nav');
let closeNav = document.querySelector('#close-nav');
let navBar = document.querySelector('#header-right');

openNav.addEventListener('click', (e)=>{
    navBar.style.left = '0';
})
closeNav.addEventListener('click', (e)=>{
    navBar.style.left = '-100%';
})