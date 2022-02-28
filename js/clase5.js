// const persona1 = {
//     nombre: "Gary",
//     edad : 30,
//     calle: "Miguel porta 1130",

// };
// persona1["nombre"] = "Aixa"; ESTO ES PARA ACTUALIZAR EL BALOR QUE YA HABIAMOS REGISTRADO ANTES
// persona1.edad = 32; IGUAL SUCEDE AQUI

// console.log(persona1.nombre);
// console.log(persona1.edad);


// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;

// }

// const persona1 = new Persona("homero",39 , "av san martin");
// const persona2 = new Persona("marge", 36, "Av panteon");

// console.log(Persona.edad);

// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }



// class persona{
//     constructor(nombre, edad, calle){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;
//     }
//     hablar(){
//         console.log("Hola soy" + " " + this.nombre);
//     }   
// }
// const persona1 = new persona("homero", 39, "Av San martin");
// const persona2 = new persona("marge", 36, "Av panteon");
// persona2.hablar();
// persona1.hablar()


// class producto{
//     constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = () =>{ console}
//     }
//     sumaIva(){
//         this.precio = this.precio * 1.21;
//     }
//     vender(){
//         this.vendido = true;
//     }
// }

// const producto1 = new producto("arroz" , "200");
// const producto2 = new producto("queso","1500");

// producto1.sumaIva();
// producto2.sumaIva();
// producto2.vender();

// console.log(this);

class cuentaBancaria{
    constructor(nombre, saldo,numero, tipo){

        this.nombre = nombre;
        this.saldo = saldo;
        this.numero = numero;
        this.tipo = tipo;
    }
    depositar(monto){

        this.saldo = this.saldo+monto;
        //this.saldo+=monto; es igual como la forma de arriba
        alert("Acaba de ingresar: "+monto+" y su nuevo saldo es: "+this.saldo);

    }
    extraer(monto){
        
        if(monto <=this.saldo){
            this.saldo=this.saldo-monto;
            alert(`Su nuevo saldo es : ${this.saldo}`)
        }else {
            alert("Fondo insuficiente")
        }
    }
}


const nombre = prompt("Ingrese su nombre");
const saldo = 0;
const numero = 0001;
const tipo = "Caja de ahorro";

const cuenta1 = new cuentaBancaria(nombre, saldo, numero, tipo);

cuenta1.depositar(Number(prompt("Ingrese el monto a depositar")));
cuenta1.extraer(Number(prompt("Ingrese monto a extraer")))
//number queda mejor cuando se van a ingresar numeros
// es como indicar el parseFloat


