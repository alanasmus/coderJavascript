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
    Swal.fire({
        title: 'Stock Cargado Exitosamente!',
        icon: 'success',
        showClass: {
            popup: 'animate__animated animate__zoomInRight'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOutLeft'
        }
    })
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

