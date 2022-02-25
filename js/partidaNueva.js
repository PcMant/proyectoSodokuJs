var btnNueva = document.querySelector('#btn-nueva-partida');
var sDificultad = document.querySelector('#f-dificultad');

fetch('sodoku.json')
    .then(data => data.json())
    .then(data => {
        btnNueva = document.querySelector('#btn-nueva-partida');
        sDificultad = document.querySelector('#f-dificultad');
        let options = '';
        let dificultad = data.dificultad;

        /*en función de las dificultades del JSON aparecerán las opciones en el formulario */
        dificultad.forEach((value,index,a) => {
            if(typeof index === 'number'){
                options +=`<option value="${dificultad[index].name}">${dificultad[index].name}</option>`;
            }
        });

        sDificultad.innerHTML = options;

        /*Se establece la dificultad y partida nueva ya que hago que se recargue la pagina 
        y por cada recarga incia el juego*/
        btnNueva.addEventListener('click', function(){

            sDificultad = document.querySelector('#f-dificultad');
            sDificultad.value;
            let ind = data.dificultad.findIndex(elemento => elemento.name == sDificultad.value);
            localStorage.setItem('dificultad',JSON.stringify({name: data.dificultad[ind].name, nMostrados: data.dificultad[ind].nMostrados}));
            location.replace("index.html");
        });
    });