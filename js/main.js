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
const producto1 = new Producto ("Lapiz", 50, 10);
const producto2 = new Producto ("Lapicera", 90, 20);
console.log(producto1, producto2);

//Funcion para cargar nuevos productos, para luego sumarlo al array "almacen" 
function crearProducto () {
    let nombre = prompt("Ingrese nombre del nuevo producto"), precio = prompt("Ingrese el precio"), stock = prompt("Ingrese Stock");
    let nuevoProducto = new Producto(nombre, precio, stock);        
    return nuevoProducto;
}
function cargarProducto(nuevoProducto) {
    almacen.push(nuevoProducto);
}

//Defino nuevoProducto para luego sumarlo al array
let nuevoProducto = crearProducto();

console.log(almacen);

cargarProducto(producto1, producto2);
cargarProducto(nuevoProducto);
console.log(almacen);

//Recargo la ganancia al precio de costo inicial
for (const Producto of almacen) {
    Producto.sumaGanancia();
    console.log("El precio final es " + Producto.precio);
}

