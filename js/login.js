// Variables blobales
var btnLogin = document.querySelector('#btn-login');
var loginUser = document.querySelector('#login-user');
var loginPass = document.querySelector('#login-pass');
var user = loginUser.value;
var pass = loginPass.value;

// Funciones
function getUsuarios(){
    return fetch('sodoku.json');
}

function returnPropiedad(propiedad){
    return propiedad;
}

// Login
btnLogin.addEventListener('click', function(){

    var userLogin = document.querySelector('#loginUser');
    loginUser = document.querySelector('#login-user');
    loginPass = document.querySelector('#login-pass');
    user = loginUser.value.trim();
    pass = loginPass.value.trim();

    console.log('Login test');
    
    getUsuarios()
        .then(data => data.json())
        .then(datos => {

            console.log(datos.usuarios);
            if(
                datos.usuarios.findIndex((elemento) => {
                    return elemento.user == user && elemento.pass == pass;
                }) > 0
            ){
                userLogin.innerHTML = user;
            }
        });

    // una vez que dejan de ser de utilidad las vaciamos
    loginUser.value = '';
    loginPass.value = '';
});