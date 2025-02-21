// Declaring list variable.
let usuarios = [];


// This module function adds a new name to the list "usuarios".
export function agregar(nombre) {
    usuarios.push(nombre);
    console.log(`Usuario ${nombre} agregado.`);
}

// This module function displays the content of the list "usuarios".
export function mostrar(lista) {
    setTimeout(() => {}, 2000);
    console.log("Lista de usuarios:")
    setTimeout(() => {}, 2000);
    console.log(lista);
}
