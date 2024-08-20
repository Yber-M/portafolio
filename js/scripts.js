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

// * Aplicar animaciones a las habiliades
function efectoSkills() {
    var skills = document.getElementById('skills');
    var dist_skill = window.innerHeight - skills.getBoundingClientRect().top;

    if (dist_skill >= 300) {
        let skills = document.getElementsByClassName('progreso');
        skills[1].classList.add('reactt');
         
    }
}

// * Detectar scrolling para animar
window.onscroll = function () {
    efectoSkills();
}