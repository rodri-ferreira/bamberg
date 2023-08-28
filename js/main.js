const btnAtivarMenu = document.querySelector(".btn-menu");

btnAtivarMenu.addEventListener('click', ()=> {
    const menu = document.querySelectorAll('.header-dropdown-menu');
    menu[3].classList.toggle('ativar-menu');
    console.log(btnAtivarMenu)
});








