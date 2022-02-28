/*function saludar() {
    console.log("Hola coders");
}

saludar();

function conParametros(parametro1,parametro2){
    console.log(`${parametro1} ${parametro2}`);
}

conParametros(10,"gary");

const sumar = function (a, b){ return a + b};
const restar = function (a, b){ return a - b};

let response = sumar(19,11);
console.log(response);
console.log(sumar(10,11));


const suma = (a, b) => { return a + b}

console.log(suma(10,10));


const iva = x => x * 0.21;

console.log(iva(100));
*/

const suma = (a,b) => a+ b;
const resta = (a,b) => a -b;

const iva = x => x * 0.21;

let precioProducto = 400;
let precioDescuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecio);