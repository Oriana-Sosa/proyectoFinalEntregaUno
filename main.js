//Sitio web de compra de libros

//Objetos y arrays
//Clientes

class Clientes {
    constructor (nombre, apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let arrayClientes = [];

//Libros

class Libros {
    constructor (titulo, autor, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
}

let librosDisponibles = [];
let librosClasicos = [];
let librosJuveniles = [];
let librosMisterio = [];
let librosRecomendados = [];
let carritoCompras = [];



//Clásicos
const orgulloPrejuicio = new Libros ("Orgullo y Prejuicio", "Jane Austen", 250);
const grandesEsperanzas = new Libros ("Grandes esperanzas", "Charles Dickens", 250);
const persuasion = new Libros ("Persuasión", "Jane Austen", 210);
const islaDelTesoro = new Libros ("La isla del tesoro", "Robert Louis Stevenson", 230);

//Juveniles
const seleccion = new Libros ("La selección", "Kiera Cass", 230);
const juegosHambre = new Libros ("Los juegos del hambre", "Suzanne Collins", 250);
const delirium = new Libros ("Delirium", "Lauren Oliver", 230);
const quintaOla = new Libros ("La quinta ola", "Rick Yancey", 200);

//Misterio
const sherlock = new Libros ("Las aventuras de Sherlock Holmes", "Arthur Conan Doyle", 230);
const orientExpress = new Libros ("Asesinato en el Orient Express", "Agatha Christie", 250);
const vecinosNovelas = new Libros ("Los vecinos mueren en las novelas", "Sergio Aguirre", 210);
const telon = new Libros ("Telón", "Agatha Christie", 215);

//Recomendados
const relatosInesperado = new Libros ("Relatos de lo inesperado", "Roald Dahl", 240);
const arbolesMuerenPie = new Libros ("Los árboles mueren de pie", "Alejandro Casona", 220);
const mujercitas = new Libros ("Mujercitas", "Louisa May Alcott", 230);
const caballeroArmadura = new Libros ("El caballero de la armadura oxidada", "Robert Fisher", 230);

//Push objetos
librosDisponibles.push(orgulloPrejuicio, grandesEsperanzas, persuasion, islaDelTesoro, seleccion,
    juegosHambre, delirium, quintaOla, sherlock, orientExpress, vecinosNovelas, telon, relatosInesperado,
    arbolesMuerenPie, mujercitas, caballeroArmadura);

librosClasicos.push(orgulloPrejuicio, grandesEsperanzas, persuasion, islaDelTesoro);
librosJuveniles.push(seleccion,juegosHambre, delirium, quintaOla);
librosMisterio.push(sherlock, orientExpress, vecinosNovelas, telon);
librosRecomendados.push(relatosInesperado,arbolesMuerenPie, mujercitas, caballeroArmadura);


//Funciones
//Funcion para que el usuario ingrese

function inicioSesion(){
    alert("¡Hola! Por favor, inicia sesión");
    const usuario = new Clientes (prompt("Nombre"), prompt("Apellido"), parseFloat(prompt("Edad")))
    arrayClientes.push(usuario);
    alert("¡Hola, " + usuario.nombre + "!");
}

//Fución para preguntar géneros
let generoElegido;
let respuesta;

function pedirRespuesta(){
    respuesta = prompt("¿Quieres volver al menú? (Si/No)").toLowerCase();
}

function pedirGenero(){
    generoElegido = parseInt(prompt("¿Qué género literario quieres consultar? Ingresa el número correspondiente del siguiente menú: \n 1)Literatura clásica \n 2)Literatura juvenil \n 3)Libros de misterio \n 4)Los libros más recomendados"));
    switch(generoElegido){
        case 1:
            alert("¡Puedes ver tu selección por consola!");
            console.log(librosClasicos);
            break;
        case 2:
            alert("¡Puedes ver tu selección por consola!");
            console.log(librosJuveniles);
            break;
        case 3:
            alert("¡Puedes ver tu selección por consola!");
            console.log(librosMisterio);
            break;
        case 4:
            alert("¡Puedes ver tu selección por consola!");
            console.log(librosRecomendados);
            break;
        default:
            alert("Parece que no has ingresado un género")
            break;
    }
} 

//Función para buscar un libro
let libroBuscado;
function buscarLibro(){
    libroBuscado = prompt("Ingresa el título que buscas. Recuerda los acentos y mayúsculas.")
    const resultadoBusqueda = librosDisponibles.some((libro) => libro.titulo === libroBuscado);
    if( resultadoBusqueda === true){
        alert("¡Tenemos tu libro! Mira su información por consola.");
        const libroEncontrado = librosDisponibles.find ((libro) => libro.titulo === libroBuscado);
        console.log(libroEncontrado)
    } else {
        alert("¡Lo sentimos! No tenemos tu libro por ahora. Consulta la consola para ver el catálogo completo.")
        console.log(librosDisponibles);
    }
}


//Funcion para sumar los precios de los libros
let resultado;
function suma (precio1, precio2) {
    resultado = precio1 + precio2;
    return resultado
}

//Función para comprar un libro
let comboElegido;

function pedirCombo(){
    comboElegido = parseInt(prompt("1) Orgullo y Prejuicio & La isla del tesoro \n 2) Relatos de lo inesperado & La selección \n 3) Las aventuras de Sherlock Holmes & Persuasión \n 4) Delirium & Los vecinos mueren en las novelas"));
    switch(comboElegido){
        case 1:
            carritoCompras.push(orgulloPrejuicio, islaDelTesoro);
            suma(orgulloPrejuicio.precio, islaDelTesoro.precio);
            break;
        case 2:
            carritoCompras.push(relatosInesperado, seleccion);
            suma(seleccion.precio,relatosInesperado.precio);
            break;
        case 3:
            carritoCompras.push(sherlock, persuasion);
            suma(sherlock.precio, persuasion.precio);
            break;
        case 4:
            carritoCompras.push(delirium, vecinosNovelas);
            suma(delirium.precio, vecinosNovelas.precio);
            break;
        default:
            alert("Hubo un error en la transacción, vuelve a intentarlo más tarde.")
            break;
    }
}

function comprarLibro(){
    alert("Actualmente, solo están disponibles estos combos de libros como parte de nuestras ofertas del mes. Elige el número correspondiente.");
    pedirCombo();
    alert("Puedes ver tus compras en la consola");
    console.log(carritoCompras);
    console.log("Tu total es de $" + resultado);
}


//Ejecución del programa
inicioSesion();
do{
    let eleccionUsuario = parseInt(prompt("Elige qué es lo que deseas hacer en este menú numérico: \n 1)Consultar nuestros géneros literarios. \n 2)Buscar un libro. \n 3)Comprar un libro. \n 4)Ver nuestro catálogo."))
    switch(eleccionUsuario){
        case 1:
            pedirGenero();
            alert("Si quieres salir, presiona enter");
            pedirRespuesta();
            break;
        case 2:
            buscarLibro();
            alert("Si quieres salir, presiona enter");
            pedirRespuesta();
            break;
        case 3:
            comprarLibro();
            alert("Si quieres salir, presiona enter");
            pedirRespuesta();
            break;
        case 4:
            alert("Puedes ver nuestro catálogo por consola");
            console.log(librosDisponibles)
            alert("Si quieres salir, presiona enter");
            pedirRespuesta();
            break;
        default:
            alert("Parece ser que no has elegido ninguna opción. Vuelve a intentarlo.");
            pedirRespuesta()
            break
    }
} while (respuesta != "no");


