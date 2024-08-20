let menuVisible = false;

// * Mostrar o ocultar menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById('nav').classList = '';
        menuVisible = false;
        
    } else {
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

function seleccionar() {
    // Ocultar cuando se le de clic a una opcion del nav
    document.getElementById('nav').classList = '';
    menuVisible = false;
}