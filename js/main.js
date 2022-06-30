//Clase para los productos
class Producto {
    constructor(nombre, precioCosto, stock, precioFinal) {
        this.nombre = nombre;
        this.precioCosto = parseFloat(precioCosto);
        this.stock = parseFloat(stock);
        this.precioFinal = this.precioCosto * 1.5;
    }
}

//Llamo  al array de productos con fetch

const pedirData = async () => {
    try {
        const resp = await fetch("data.json");
        console.log(resp);
        const data = await resp.json();
        console.log(data);
        //Realizo un forof con data.almacen para así si generar el precioFinal
        for(const prod of data.almacen) {
            cargarProducto(new Producto(prod.nombre, prod.precioCosto, prod.stock));
        }
    } catch (err) {
        console.log(err);
    }
}

function crearProducto() {
    nombre = document.querySelector("#nombre").value;
    precioCosto = document.querySelector("#precioCosto").value;
    stock = document.querySelector("#stock").value;
    let nuevoProducto = new Producto(nombre, precioCosto, stock);
    almacen.push(nuevoProducto);
    actualizarTabla();
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

function actualizarTabla() {
    let html = "";
    html += "<tr><th>Nombre</th><th>Precio Costo</th><th>Stock</th><th>Precio Final</th></tr>";
    //Try y catch para captar errores
    try {
        for (const producto of almacen) {
            html += "<tr><td>" + producto.nombre + "</td><td>"
            + producto.precioCosto + "</td><td>" + producto.stock + "</td><td>" + producto.precioFinal + "</td></tr>";
            console.log(html);
        }
        document.querySelector("#tabla").innerHTML = html;
    } catch(err) {
        console.log(err);
    }    
}

let almacen = [];

//Creo esta funcion para pedir la data y que espera a recibir su respuesta
const cargarData = async () => {
    await pedirData()
    actualizarTabla();
}
cargarData();
