// importacion de contenido de la biblioteca file system
const fs = require("fs");


// funcion que se encarga de agregar contenido al archivo "citas.json" son sus respectivas condiciones
const register = ( name, age, animal, colour, illness) =>{
    let citas; 
    try {
        citas = JSON.parse(fs.readFileSync("citas.json", "utf8"))  
    } catch (error) {
        citas = [];    
    } 
    const id = Math.floor(Math.random() * 100).toString()
    
    if(!name || !age || !animal || !colour || !illness) {
        console.error("Ingrese Todos Los datos Correspondientes")
        return
    }else {
        console.log("Los Datos Se Ingresaron Con Exito")
    }

    citas.push({id, name, age, animal, colour, illness})
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2))
    console.log(citas)
}

// funcion que se encarga de leer el contenido de "citas.json" o buscar un id en espesifico
const read = (id) => {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
    
    if (id === "all") {
        console.log("Estas son todas las citas que tienes en total", citas);
    } else {
        const cita = citas.find(e => e.id === id);
        if (cita) {
            console.log("Cita encontrada:", cita);
        } else {
            console.log("No se encontró ninguna cita con el ID especificado.");
        }
    }
}

// exportacion de las funciones
module.exports = {register, read}