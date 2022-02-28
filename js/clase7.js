const productos =[
    
        { id:1, producto: "Qiyi 3 x 3", precio: 749.59},
        { id:2, producto: "Qiyi 2 x 2", precio: 549.59},
        { id:3, producto: "MoYu 3 x 3", precio: 949.59},
        { id:4, producto: "MoYu 2 x 2", precio: 549.59},
    
];
const guardaLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
// //producto por produto
// for(const producto of productos) {
//     guardaLocal (producto.id, JSON.stringify(productos));
//     // console.log(guarda);

// }
// para almacenar el array completo
guardaLocal("listaProductos", JSON.stringify(productos))


// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//     producto.sumaIva();



let array=[];

//guardamos los datos ingresados por el usuario
for(let i=0; i<5; i++){
    array.push(prompt(`Ingresar dato N° ${i}:`));
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}
let clave=0;
for(const storage of array){
    guardarLocal(clave, array[clave]);
    clave++;
}

for (let i=0; i<5; i++){
console.log(localStorage.getItem(i));
}
