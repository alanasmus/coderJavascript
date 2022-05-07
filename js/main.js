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

let ingreso = parseInt(prompt("Seleccioná tu producto \n 1-Cuaderno universitario \n 2-Cuaderno a5 \n 3-Libreta a6"))
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
}
 