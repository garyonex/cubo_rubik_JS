/*const list =['a' , false, 1, true, { nombre:'Gary'}, [10,20,30]]
const secondList = [1,2,3,4,5]
const chars = ['a','b','c']

console.log(list.slice(1,3)),



list.push("coder")
list.push({apellido: "Calle"})
//console.log(list.concat(secondList))
//console.log(list.join("@"));
//join lo que hace es agregar este elemento dentro de la lista y lo que hara sera separarlo

/*const params = [1,2]
for( let index = 0; index < params.length; index++){
    query = params[index] + "&"
}*/
/*
const persona = {nombre:"Gary", apellido:"Calle"}
const persona1 ={nombre:"Steven", apellido:"Paba"}

const list = [persona1]
list.push(persona)
list.push({nombre:'gabriel', apellido: "guette"})

for (const item of list) {
    console.log(item.nombre);
}


const products =[
    {id:1,value:10},
    {id:2,value:20},
    {id:3,value:50},
    {id:10,value:100},
]

let sum = 0
for (const iterator of object) {
    
}*/


// class CarritoDeCompras {
//     constructor(date,nombreUsuario,){
//         this.date = date
//         this.nombreUsuario = nombreUsuario,
//         this.items = []
//     }
//     agregarProducto(product){
//         this.items.push(product)
//     }

//     obtenerProducto(){
//         return this.items
//     }
// }

// class Productos{
//     constructor(nombre,precio){
//         this.nombre = nombre
//         this.precio = precio
//     }
// }


// const CarritoDeCompras = new CarritoDeCompras(new Date(), "Gary")

// const leche = new product("leche", 2.5,0)
// CarritoDeCompras.agregarProducto(leche)
// console.log(CarritoDeCompras.obtenerProducto());

// class persona{
//     constructor(nombre, apellido){
//         this.nombre =  nombre;
//         this.apellido = apellido;
//         this.imagen = "../img/usuario.png"

//     }
// }

// const lista = [];
// const persona1 = new persona("gary", "calle")
// lista.push(persona1);


// const createItems = () => {
//     const section = document.querySelector(".items")
//     lista.map((valor, index) =>{
//         const newDiv = document.createElement("div")
//         const titulo = document.createElement("h2")
//         const imagen = document.createElement("img")

//         titulo.textContent =`person: ${valor.nombre} ${valor.apellido}`

//         imagen.src = valor.img
//         imagen.width= 250
//         imagen.height = 250

//         section.appendChild(newDiv)
//         newDiv.appendChild(titulo)
//         newDiv.appendChild(imagen)
//         }

//     )
// }

// const addPerson = () => {
//     const persona = new persona('','')
//     persona.nombre = prompt("Ingrese nombre")
//     persona.apellido = prompt("ingrese apellido")
//     list.push(persona)
//     const section = document.querySelector(".items")
//     const newDiv = document.createElement("div")
//     const titulo = document.createElement("h2")
//     const imagen = document.createElement("img")
//     titulo.textContent =`${persona.nombre} ${persona.apellido}`


// }

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();
    console.log(productos)