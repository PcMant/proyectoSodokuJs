// Variables globales
var table = document.querySelector('#table');
var celda = document.querySelectorAll('#table td');

// Sobrescribo todas las celdas a vacio
celda.forEach(function(value, index){
    if(typeof index === 'number'){
        celda[index].innerHTML = '⠀';
    }
});


// Obtener todos los dodokus del json
fetch('sodoku.json')
    .then(data => data.json())
    .then(s => {
        var sodokus = s.sodokus;

        // Obtención de un sodoku aleatorio
        var sodoku = sodokus[Math.random()*sodokus.length];

        console.log(sodoku);
    });