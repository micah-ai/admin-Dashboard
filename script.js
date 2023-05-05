const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themetoggler = document.querySelector(".theme-toggler");

//show menu
menuBtn.addEventListener( 'click', ()=>{
    sideMenu.style.display = 'block'
});
//hide menu
closeBtn.addEventListener( 'click', ()=>{
    sideMenu.style.display = 'none'
});
//change theme
themetoggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
    themetoggler.querySelectorAll('span').forEach(theme => {
        theme.classList.toggle('active');
    });
});