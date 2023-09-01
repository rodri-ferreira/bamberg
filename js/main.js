const btnAtivarMenu = document.querySelector(".btn-menu");
const verDetalhes = document.querySelector(".btn-ver-condominio");
const btnDialog = document.querySelector(".btn-ir-form");
const dialog = document.getElementById("dialog");
const btnCancelar = document.querySelector(".cancelar");

btnAtivarMenu.addEventListener('click', ()=> {
    const menu = document.querySelectorAll('.header-dropdown-menu');
    menu[3].classList.toggle('ativar-menu');
});

verDetalhes.addEventListener('click', ()=> {
    const detalhes = document.querySelector(".detalhes-div-condominio");
    detalhes.classList.toggle('ativar-detalhes');
});


btnDialog.addEventListener('click', ()=> {
    dialog.show()
});

btnCancelar.addEventListener('click', (e)=> {
    e.preventDefault()
    dialog.close()
});



// window.addEventListener("resize", function() {
//     const widthResize = this.window.innerWidth;
//     console.log(widthResize)
//     if(widthResize < 992) {

//         btnDialog.addEventListener('click', ()=> {
//             dialog.show()
//         });
        
//         btnCancelar.addEventListener('click', (e)=> {
//             e.preventDefault()
//             dialog.close()
//         });
//     }
// })

// window.addEventListener("load", function() {
//     const width = window.innerWidth;
//     if (width > 992) {
//         btnDialog.addEventListener('click', ()=> {
//             dialog.show()
//         });
        
//         btnCancelar.addEventListener('click', (e)=> {
//             e.preventDefault()
//             dialog.close()
            
//         });
//     }
// });




