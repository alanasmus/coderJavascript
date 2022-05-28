//Creo el array contenedor de stock
let almacen = []; 
if(localStorage.getItem("almacen") == null){
    almacen = [];
} else {
    almacen = JSON.parse(localStorage.getItem("almacen"));
}

//Creo la Clase para los productos
class Producto {
    constructor(nombre, precioCosto, stock, precioFinal) {
        this.nombre = nombre;
        this.precioCosto= parseFloat (precioCosto);
        this.stock = parseFloat (stock);
        this.precioFinal = this.precioCosto * 1.5;
    }    
}    
/*
//Mi stock de productos iniciales
const producto1 = new Producto ("Lapiz Bic HB", 50, 10);
const producto2 = new Producto ("Lapicera Bic negra", 90, 20);
const producto3 = new Producto ("Lapicera Bic azul", 90, 15); 

cargarProducto(producto1);
cargarProducto(producto2);
cargarProducto(producto3);
console.log(almacen); */
actualizarTabla()

//Funcion para cargar nuevos productos, para luego sumarlo al array "almacen" 
function crearProducto () {
    nombre = document.querySelector("#nombre").value; 
    precioCosto = document.querySelector("#precioCosto").value;
    stock = document.querySelector("#stock").value;
    let nuevoProducto = new Producto(nombre, precioCosto, stock);
    almacen.push(nuevoProducto);
    actualizarTabla();
    //console.log(almacen);
    localStorage.setItem("almacen", JSON.stringify(almacen));
}

function cargarProducto(nuevoProducto) {
    almacen.push(nuevoProducto);
}

function actualizarTabla(){
    let html = "";
    html += "<tr><th>Nombre</th><th>Precio Costo</th><th>Stock</th><th>Precio Final</th></tr>";
    for (const producto of almacen) {
        html += "<tr><td>"+producto.nombre+"</td><td>"
        +producto.precioCosto+"</td><td>"+producto.stock+"</td><td>"+producto.precioFinal+"</td></tr>";
    }
    document.querySelector("#tabla").innerHTML = html;
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