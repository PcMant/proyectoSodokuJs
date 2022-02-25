// Para nada más cargar el script
localStorage.setItem("seleccionado", 0);
if (localStorage.getItem("dificultad") == null)
  localStorage.setItem(
    "dificultad",
    JSON.stringify({ name: "Fácil", nMostrados: 33 })
  );
localStorage.removeItem("sodoku");

// Variables globales
var btnNuevaPartida = document.querySelector("#btn-nueva-partida");
var btnComprobar = document.querySelector("#btn-comprobar");
var table = document.querySelector("#table");
var celdas = document.querySelectorAll("#table td");
var sodoku = [];
var iCeldas = [];
var dificultad = JSON.parse(localStorage.getItem("dificultad"));

// Mostrar la dificultad
document.querySelector("#dificultad").innerHTML = dificultad.name;

// Funciones globales
/* funciion que devuelve una celda seleccionada*/
function getSeleccionado() {
  return localStorage.getItem("seleccionado") != null
    ? localStorage.getItem("seleccionado")
    : 0;
}

/* funcion para barajear un array */
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

/* funcion que limpia los estilos de fallo */
const limpiadoFallos = (i) => celdas[i].classList.remove("td-fallo");

/*función que limpis los estilos de acierto */
const limpiadoAciertos = (i) => celdas[i].classList.remove("td-acierto");

// Obtener todos los dodokus del json
fetch("sodoku.json")
  .then((data) => data.json())
  .then((s) => {
    iCeldas = [];
    dificultad = JSON.parse(localStorage.getItem("dificultad"));

    // proceso de obtención de sodoku aleatorio
    sodokus = s.sodokus;
    sodoku = sodokus[Math.floor(Math.random() * sodokus.length)];
    localStorage.setItem("sodoku", JSON.stringify(sodoku[0]));

    // Sobrescribo todas las celdas a vacio
    celdas.forEach(function (value, index, arrayCeldas) {
      if (typeof index === "number") {
        celdas[index].innerHTML = "⠀";
        limpiadoFallos(index);
        limpiadoAciertos(index);
        iCeldas.push(index);

        // Evento al seleccionar celda
        celdas[index].addEventListener("click", function () {
          arrayCeldas.forEach(function (v, i, a) {
            celdas[i].classList.remove("td-seleccionado");
          });
          celdas[index].classList.add("td-seleccionado");
          localStorage.setItem("seleccionado", index);
        });
      }
    });

    /* hago aleatorio iCeldas ya que me servirá como index para poner de manera
        aleatoria las celdas que va a mostrar números desde el principio*/
    shuffle(iCeldas);
    shuffle(iCeldas);
    shuffle(iCeldas);
    /*la cantidad depende de la dificultad*/
    for (i = 0; i <= dificultad.nMostrados; i++) {
      celdas[iCeldas[i]].innerHTML = sodoku[0][iCeldas[i]];
    }

    // Conometro
    var t = new Date(0);
    t.setTime(-3600000);
    var time = document.querySelector("#time");
    var ms = 0;
    var tiempo = window.setInterval(() => {
      t.setTime(t.getTime() + 1000);
      ms =
        t.getTime() < 3600000
          ? -3600000 + t.getTime() + 1000
          : t.getTime() + 1000;
      let h =
        t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
      let m =
        t.getMinutes() < 10
          ? "0" + t.getMinutes()
          : t.getMinutes();
      let s =
        t.getSeconds() < 10
          ? "0" + t.getSeconds()
          : t.getSeconds();
        time.innerHTML = `${h}:${m}:${s}`;
    }, 1000);

    //Al hacer click en el boton comprobar
    btnComprobar.addEventListener("click", function () {
      celdas = document.querySelectorAll("#table td");
      bolStatus = false;
      bbolStatus = true;

      celdas.forEach(function (value, index, arrayCeldas) {
        if (typeof index === "number") {
          if (celdas[index].innerHTML == sodoku[0][index]) {
            celdas[index].classList.add("td-acierto");
            bolStatus = !bbolStatus ? false : true;
          } else {
            celdas[index].classList.add("td-fallo");
            bolStatus = false;
            bbolStatus = false;
          }
        }
      });

      if (bolStatus) {
        /*Ventana modal, terminar partida, parar conometro, almacenar tiempo en localStorage*/
        
        /*ventana modal de finalización */
        var winModal = new bootstrap.Modal(document.getElementById("winModal"));
        winModal.show();

        /*la parte de lo del tiempo*/
        let tt = JSON.parse(localStorage.getItem("login"));
        clearInterval(tiempo);
        ms *= -1;
        console.log(ms);
        
        if(tt.mejorTiempo > ms || tt.mejorTiempo == 0) {
            localStorage.setItem('login', JSON.stringify({"user":tt.user,"pass":tt.pass,"mejorTiempo":ms}));
            document.querySelector('#userRecord').innerHTML = time.innerHTML;
        }
      }
    });
  });

//Eventos de pulsado de teclado fisico, números a una celda especifica o borrado de esta
window.addEventListener("keypress", function (event) {
  let ec = event.code;
  let s = getSeleccionado();

  switch (true) {
    // Introduciendo números
    case ec == "Numpad1" || ec == "Digit1":
      limpiadoFallos(s);
      celdas[s].innerHTML = 1;
      break;
    case ec == "Numpad2" || ec == "Digit2":
      limpiadoFallos(s);
      celdas[s].innerHTML = 2;
      break;
    case ec == "Numpad3" || ec == "Digit3":
      limpiadoFallos(s);
      celdas[s].innerHTML = 3;
      break;
    case ec == "Numpad4" || ec == "Digit4":
      limpiadoFallos(s);
      celdas[s].innerHTML = 4;
      break;
    case ec == "Numpad5" || ec == "Digit5":
      limpiadoFallos(s);
      celdas[s].innerHTML = 5;
      break;
    case ec == "Numpad6" || ec == "Digit6":
      limpiadoFallos(s);
      celdas[s].innerHTML = 6;
      break;
    case ec == "Numpad7" || ec == "Digit7":
      limpiadoFallos(s);
      celdas[s].innerHTML = 7;
      break;
    case ec == "Numpad8" || ec == "Digit8":
      limpiadoFallos(s);
      celdas[s].innerHTML = 8;
      break;
    case ec == "Numpad9" || ec == "Digit9":
      limpiadoFallos(s);
      celdas[s].innerHTML = 9;
      break;
  }
});
// Borrado de número a número pulsando la tecla Backspace
window.addEventListener("keydown", (event) => {
  if (event.code == "Backspace" || event.code == "Delete") {
    limpiadoFallos(getSeleccionado());
    celdas[getSeleccionado()].innerHTML = "⠀⠀";
  }
});
