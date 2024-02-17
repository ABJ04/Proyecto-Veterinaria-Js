// importacion de contenido del archivo operaciones.js
const { register, read } = require("./operaciones.js")


// esto se encarga de ignorar los 2 elementos de la terminal y enfocarse en la tersera en este caso "action", (siempre sera el primer elemento del array)
const [action, id, name, age, animal, colour, illness] = process.argv.slice(2)


// esta funcion sirve para ver si el tercer elemento de la terminal es igual a "register" si no es asi "ERROR".
if (action == "register"){
    register(id, name, age, animal, colour, illness)
};


// esta funcion sirve para ver si el tercer elemento de la terminal es igual a "read" si no es asi "ERROR".
if(action == "read"){
    read(id)
 }