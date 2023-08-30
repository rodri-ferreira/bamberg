const btnAtivarMenu = document.querySelector(".btn-menu");
const verDetalhes = document.querySelector(".btn-ver-condominio");

btnAtivarMenu.addEventListener('click', ()=> {
    const menu = document.querySelectorAll('.header-dropdown-menu');
    menu[3].classList.toggle('ativar-menu');
});

verDetalhes.addEventListener('click', ()=> {
    const detalhes = document.querySelector(".detalhes-div-condominio");
    detalhes.classList.toggle('ativar-detalhes');
    
});







