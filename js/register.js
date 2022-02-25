// Variables globales
var btnLogin = document.querySelector("#btn-register");
var loginUser = document.querySelector("#register-user");
var loginPass = document.querySelector("#register-pass");
var userLogin = document.querySelector("#loginUser");
var userRecord = document.querySelector("#userRecord");
var logout = document.querySelector("#logout");
var error = document.querySelector("#error");
var user = loginUser.value;
var pass = loginPass.value;
var record = new Date();
var login = JSON.parse(localStorage.getItem("login"));

// Funciones
function getUsuarios() {
  return fetch("sodoku.json");
}

// En caso de haber ya una sesión el localStorage se mostrará el nombre de usuario y su recod de tiempo
getUsuarios()
  .then((data) => data.json())
  .then((datos) => {
    login = JSON.parse(localStorage.getItem("login"));

    if (
      login != null &&
      login.user != undefined &&
      login.pass != undefined &&
      login.mejorTiempo != undefined &&
      login.user != null &&
      login.pass != null &&
      login.mejorTiempo != null
    ) {
      // Onteniendo indice de concidencia
      let ind = datos.usuarios.findIndex((elemento) => {
        return elemento.user == login.user && elemento.pass == login.pass;
      });

      record = new Date();

      if (ind >= 0) {
        record.setTime(login.mejorTiempo);
        let h =
          record.getHours() < 10 ? "0" + record.getHours() : record.getHours();
        let m =
          record.getMinutes() < 10
            ? "0" + record.getMinutes()
            : record.getMinutes();
        let s =
          record.getSeconds() < 10
            ? "0" + record.getSeconds()
            : record.getSeconds();

        userLogin.innerHTML = login.user;
        userRecord.innerHTML = `${h}:${m}:${s}`;
      }
    }
  });

// Login
btnLogin.addEventListener("click", function () {
  userLogin = document.querySelector("#loginUser");
  loginUser = document.querySelector("#register-user");
  loginPass = document.querySelector("#register-pass");
  userRecord = document.querySelector("#userRecord");
  error = document.querySelector("#error");
  user = loginUser.value.trim();
  pass = loginPass.value.trim();

  getUsuarios()
    .then((data) => data.json())
    .then((datos) => {
      // Onteniendo indice de concidencia
      let ind = datos.usuarios.findIndex((elemento) => {
        return elemento.user == user && elemento.pass == pass;
      });

      if (ind >= 0) {
        var record = new Date();

        // Datos del usuario en pantalla y almacenandolo en localStorage
        record.setTime(datos.usuarios[ind].mejorTiempo);
        let h =
          record.getHours() < 10 ? "0" + record.getHours() : record.getHours();
        let m =
          record.getMinutes() < 10
            ? "0" + record.getMinutes()
            : record.getMinutes();
        let s =
          record.getSeconds() < 10
            ? "0" + record.getSeconds()
            : record.getSeconds();

        userLogin.innerHTML = user;
        userRecord.innerHTML = `${h}:${m}:${s}`;
        localStorage.setItem(
          "login",
          JSON.stringify({
            user: user,
            pass: pass,
            mejorTiempo: datos.usuarios[ind].mejorTiempo,
          })
        );
        error.innerHTML = "";
      } else {
        /*error.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show mx-5" role="alert">
                <strong>Error!</strong> Las credenciales son incorrectas.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;*/
      }
    });

  // una vez que deja de se de utilizad el contenido del formulario se vacia
  loginUser.value = "";
  loginPass.value = "";
});

/*Un logaut El cierra de sesión, 
simplemente seria un evento que se carga el localStorage login*/
logout.addEventListener("click", function () {
  loginUser = document.querySelector("#register-user");
  userRecord = document.querySelector("#userRecord");

  localStorage.removeItem("login");
  userLogin.innerHTML = "Invitado";
  userRecord.innerHTML = "00:00:00";
});
