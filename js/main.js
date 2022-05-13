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

//Primer Prueba de simulador
/* let ingreso = parseInt(prompt("Seleccioná tu producto \n 1-Cuaderno universitario \n 2-Cuaderno a5 \n 3-Libreta a6"))
let cantidad = parseInt(prompt("Ingresa la cantidad"));
switch (ingreso){
    case 1:
        alert("Seleccionaste Cuaderno Universitario por " + cantidad + " unidad/es")
        break;
    case 2:
        alert("Seleccionaste Cuaderno a5 por " + cantidad + " unidad/es")
        break;
    case 3:
        alert("Seleccionaste Libreta a6 por " + cantidad + " unidad/es")
        break;
    default:
        alert("Error en selección")
        break;
} */
 
//Creo la Clase
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
//Creo el array
const almacen = [];

//Mi primer producto
const producto1 = new Producto ("Lapiz", 50, 10);
console.log(producto1);

//Funcion para nuevos productos 
function crearProducto () {
    let nombre = prompt("Ingrese nombre del nuevo producto"), precio = prompt("Ingrese el precio"), stock = prompt("Ingrese Stock");
    let nuevoProducto = new Producto(nombre, precio, stock);        
    return nuevoProducto;
}
function cargarProducto(nuevoProducto) {
    almacen.push(nuevoProducto);
}

//Defino nuevoProducto
let nuevoProducto = crearProducto();

console.log(almacen);

cargarProducto(producto1);
cargarProducto(nuevoProducto);
console.log(almacen);

//Recargo la ganancia al precio de costo
for (const Producto of almacen) {
    Producto.sumaGanancia();
    console.log("El precio final es " + Producto.precio);
}