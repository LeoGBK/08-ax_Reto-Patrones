// Declaring list variable.
let usuarios = [];


// This module function adds a new name to the list "usuarios".
function agregar(nombre) {
    usuarios.push(nombre);
    setInterval(() => {
        
    }, 2000);
    console.log(`Usuario S{nombre} agregado.`)
}

// This module function displays the content of the list "usuarios".
function mostrar(lista) {
    console.log("Lista de usuarios:")
    setInterval(() => {
        
    }, 2000);
    console.log(lista);
}

export default mostrar;