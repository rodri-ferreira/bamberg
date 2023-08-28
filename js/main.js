const btnMenuAtivar = document.querySelector("#btnAtivar");

const verificaWidth = () => {
    let width = window.innerWidth;
    if(width <= 992) {
        console.log('caac')
        const menuH3 = document.querySelectorAll('.h3-nav');

        menuH3.forEach((e, i)=> {
            e.addEventListener('click', ()=> {
                const headerDrop = document.querySelectorAll('.header-dropdown-menu');
                headerDrop[i].classList.toggle('ativar-menu-dropdown');
                console.log('caac');
            })
        }) 
    }
}

window.addEventListener('resize', ()=> {
    verificaWidth()
})

window.addEventListener('load', function() {
    verificaWidth()
});

btnMenuAtivar.addEventListener('click', ()=> {
    const nav = document.querySelector('nav');
    nav.classList.toggle('ativar-menu')
}) 









