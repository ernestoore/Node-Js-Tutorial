//Yo tengo que leer un archivo.
//Para leer un archivo Node se debe utilziar una libreria
//Para utilizar una libreria debemos utilizar una referencia.
//fs = fileSystem
const fs = require("fs")
let contenido
//FileSystem nos permite interactuar con el disco.
//Como tiene el sufijo Sync significa que es sincrono, 
//por lo que debe acabarse su ejecucion para continuar.
console.log("Inicio de lectura")
//Encodificacion indica que caracteres usar.utf-8 permite ñ y tildes.
//const contenido = fs.readFileSync("./mivideo.txt", {encoding: "utf-8"}) 


//Cuando no contienen la terminacion Sync se consideran asincrono.
fs.readFile("./mivideo.txt", {encoding: "utf-8"}, 
//Paramtros: 
//1. ruta
//2. Encoding
//3. funcion de callback. En la funcion de callback el primer parametro es el error.
(errr,cont)=> {
    contenido = cont
    console.log(contenido)
})
console.log("Fin de lectura")


//El streaming lo que hace es llevar informacion de un lado a otro.
const lectura = fs.createReadStream("./mivideo.txt", {encoding: "utf-8"})
const escritura = fs.createWriteStream("./copiamivideo.txt", {encoding: "utf-8"})

//El metodo On maneja eventos.

//La carretilla ya esta llena y se ha transportado al otro lado
lectura.on("data", chunks =>{
//Ahora se debe reconstruir la roca.
    escritura.write(chunks)
})


