// Variables globales
var table = document.querySelector('#table');
var celda = document.querySelectorAll('#table td');
var sodokus = [];

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
        sodokus = s.sodokus;
});

console.log(sodokus);
