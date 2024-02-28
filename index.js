let usuario = "agustin";
let contraseña = "4058"
let acceso = false;
let cantidad;
let producto;
let totaldecompra;
const IVA = 1.21;
let formaDePago;
let meses;


    for(let i=3; i>=0; i--){
        let confirmaTuUsuario = prompt("Confirma tu Usuario");
        let confirmaTuContraseña = prompt("Confirma Tu Contraseña")
        if((usuario === confirmaTuUsuario) && (contraseña === confirmaTuContraseña)){
            alert("Bienvenido agustin");
            acceso = true;
            break;
        }else{
            alert("algo no salio como se esperaba, intenta nuevamente. Te quedan "+ i +" intentos")
            }
        }

//carrito de compras
const carrito = [];//carrito de compras (array vacio)
const envio = 12000;
//arrray de productos:
const tienda = [
    {id: 1, nombre: "volkswagen polo", precio: 23000 },
    {id: 2, nombre: "volkswagen vento", precio: 27500},
    {id: 3, nombre: "volkswagen virtus", precio: 19000 },
];

//Funciones
//1- funcion para buscar el producto:
function buscarProducto(array, nombre) {
    return array.find((elem) => elem.nombre.includes(nombre));
}
//2- funcion para agregar productos al carrito:
function agregarAlCarrito(array, producto) {
    array.push(producto);
    return array;
}
//3- funcion para calcular el pago:
function comprarProductos(array) {
    return array.reduce((acc, elemento) => {
        return acc + elemento.precio * elemento.cantidad;
    }, );
}

let agregar = true;

do{
    let seleccionar = prompt(
        "Elige un producto: \nVolkswagen Polo. \nVolkswagen Vento. \nVolkswagen Virtus. \n LOS PRECIOS DE LOS VEHICULOS NO INCLUYEN IVA."
    ).toLowerCase();
    let cuantos = parseInt(
        prompt("¿Cuantos modelos de " + seleccionar + " deseas comprar?")
    );
    const encontrado = buscarProducto(tienda, seleccionar);
    console.log(encontrado);

    //guardamos la cantidad de piezas en una propiedad del objeto producto:
    encontrado,cantidad = cuantos;

    agregarAlCarrito(carrito, encontrado);
    console.log(carrito);

    let respuesta = prompt("¿Deseas agregar otro producto? (s/n)").toLowerCase();
    if (respuesta === "s") {
        agregar = true;
    } else {
        agregar = false;
    }
} while (agregar);

//total compra sin impuestos:
const compraSinIva = comprarProductos(carrito);
console.log(compraSinIva.toFixed(2)); //toFixed(2) ajusta la cantidad de la compra a solo 2 decimales.

//total compra con impuestos sin envio:
const compraConIva = comprarProductos(carrito) * IVA;
console.log(compraConIva.toFixed(2));

//total compra con impuestos + envio:
const compraConEnvio = comprarProductos(carrito) * IVA + envio;
console.log(compraConEnvio);

//elegir envio a domicilio:
const envioAdomicilio = prompt(
    `Deseas recibir tu compra en la puerta de tu casa por un costo de \$${envio}? \nsi. \nno.`
);
if (envioAdomicilio == "si") {
    alert("El total a pagar es: $" + compraConEnvio);
} else {
    alert("El total a pagar es: $" + compraConIva) ;
}
alert("Gracias por su compra");