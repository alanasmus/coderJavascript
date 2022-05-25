/*
function inicioSesion(mensaje) {
    let sesion = prompt(mensaje);
    console.log(sesion);
    return sesion;
}

let user = inicioSesion("Ingrese su usuario");
let password = inicioSesion("Ingrese su contraseña");

if (user != "" && password != ""){
    alert("Bienvenido/a " + user);
} else {
    alert("No ingresaste usuario y contraseña");
}
*/

/*
//Constantes del form de stock
const form = document.querySelector("form");
const inputNombre = document.getElementById("nombre").value; 
const inputPrecioCosto = document.getElementById("precioCosto").value;
const inputStock = document.getElementById("stock").value;
const btnGuardar = document.getElementById("btnGuardar").value;
*/

//Creo la Clase para los productos
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio= parseFloat (precio);
        this.stock = parseFloat (stock);
    }
    sumaGanancia() {
        this.precio = this.precio * 1.4;
    }
}

//Creo el array contenedor de stock
const almacen = [];

//Mi stock de productos iniciales
const producto1 = new Producto ("Lapiz Bic HB", 50, 10);
const producto2 = new Producto ("Lapicera Bic negra", 90, 20);
const producto3 = new Producto ("Lapicera Bic azul", 90, 15);

//Funcion para cargar nuevos productos, para luego sumarlo al array "almacen" 
function crearProducto () {
    let nombre = document.getElementById("nombre").value; 
    let precio = document.getElementById("precioCosto").value;
    let stock = document.getElementById("stock").value;
    let nuevoProducto = new Producto(nombre, precio, stock);
    return nuevoProducto;
}
function cargarProducto(nuevoProducto) {
    almacen.push(nuevoProducto);
}

//Defino nuevoProducto para luego sumarlo al array
let nuevoProducto = crearProducto();

console.log(almacen);

cargarProducto(producto1);
cargarProducto(producto2);
cargarProducto(producto3);
cargarProducto(nuevoProducto);
console.log(almacen);

//Recargo la ganancia al precio de costo inicial
for (const Producto of almacen) {
    Producto.sumaGanancia();
    console.log("El precio final de " + Producto.nombre + " es " + Producto.precio);
}

/*
//Agrego un metodo de busca "filter", con el objetivo de poder encontrar elementos que cumplan ciertas condiciones en su nombre escribiendolo exactamente como es
function buscarProducto () {
    let busqueda = prompt("Busca un producto por su nombre");
    const resultadoBusqueda = almacen.filter( (el) => el.nombre.includes(busqueda));
    return resultadoBusqueda;
}

console.log(buscarProducto());
*/