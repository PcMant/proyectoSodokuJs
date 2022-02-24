// Para nada más cargar el script
localStorage.setItem('seleccionado',0);
localStorage.setItem('dificultad','');

// Variables globales
var table = document.querySelector('#table');
var celdas = document.querySelectorAll('#table td');
var sodokus = [];

// Funciones globales
function getSeleccionado(){
    return localStorage.getItem('seleccionado') != null ? localStorage.getItem('seleccionado') : 0;
}

const limpiadoFallos = i => {celdas[i].classList.remove('td-fallo');}

// Obtener todos los dodokus del json
fetch('sodoku.json')
    .then(data => data.json())
    .then(s => {
        sodokus = s.sodokus;
});

// Sobrescribo todas las celdas a vacio
celdas.forEach(function(value, index, arrayCeldas){
    if(typeof index === 'number'){
        celdas[index].innerHTML = '⠀⠀';

        // Evento al seleccionar celda
        celdas[index].addEventListener('click', function(){
            arrayCeldas.forEach(function(v, i,a){
                celdas[i].classList.remove('td-fallo');
                celdas[i].classList.remove('td-seleccionado');
            });
            celdas[index].classList.add('td-seleccionado');
            localStorage.setItem('seleccionado',index);
        });

    }
});

//Eventos de pulsado de teclado fisico, números a una celda especifica o borrado de esta
window.addEventListener('keypress', function(event){

    let ec = event.code;
    let s = getSeleccionado();
    
    switch (true){
        // Introduciendo números
        case ec=='Numpad1' || ec=='Digit1': limpiadoFallos(s); celdas[s].innerHTML = 1; break;
        case ec=='Numpad2' || ec=='Digit2': limpiadoFallos(s); celdas[s].innerHTML = 2; break;
        case ec=='Numpad3' || ec=='Digit3': limpiadoFallos(s); celdas[s].innerHTML = 3; break;
        case ec=='Numpad4' || ec=='Digit4': limpiadoFallos(s); celdas[s].innerHTML = 4; break;
        case ec=='Numpad5' || ec=='Digit5': limpiadoFallos(s); celdas[s].innerHTML = 5; break;
        case ec=='Numpad6' || ec=='Digit6': limpiadoFallos(s); celdas[s].innerHTML = 6; break;
        case ec=='Numpad7' || ec=='Digit7': limpiadoFallos(s); celdas[s].innerHTML = 7; break;
        case ec=='Numpad8' || ec=='Digit8': limpiadoFallos(s); celdas[s].innerHTML = 8; break;
        case ec=='Numpad9' || ec=='Digit9': limpiadoFallos(s); celdas[s].innerHTML = 9; break;
    }
});
// Borrado de número a número pulsando la tecla Backspace
window.addEventListener('keydown', event => {
    if(event.code == 'Backspace' || event.code == 'Delete') {
        limpiadoFallos(getSeleccionado());
        celdas[getSeleccionado()].innerHTML = '⠀⠀';
    }
});
