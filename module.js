// Declaring list variable.
let usuarios = [];


// This module function adds a new name to the list "usuarios".
export function agregar(nombre) {
    usuarios.push(nombre);
    setInterval(() => {
        
    }, 2000);
    console.log(`Usuario S{nombre} agregado.`)
}

// This module function displays the content of the list "usuarios".
export function mostrar(lista) {
    console.log("Lista de usuarios:")
    setInterval(() => {
        
    }, 2000);
    console.log(lista);
}
