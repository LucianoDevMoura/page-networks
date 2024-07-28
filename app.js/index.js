const botaoClose = document.getElementById('close')
const menuMobile = document.getElementById('menuMobile')


function mostrarMenu () {
    const navListaMobile = document.querySelector('.menu-mobile')
    navListaMobile.classList.add('ativo')
}

function fecharMenu () {
    const navListaMobile = document.querySelector('.menu-mobile')
    navListaMobile.classList.remove('ativo')
}

menuMobile.addEventListener('click', mostrarMenu)
botaoClose.addEventListener('click', fecharMenu)