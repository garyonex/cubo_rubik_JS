// Creamos como sera el carrito
// Creamos como sera el carrito
class Productos{
    constructor(id,modelo, marca, precio,stock){
        this.id=id;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.stock= stock;

    }
    // para que se le agrege el iva a cada uno de los productos
    iva(){
        this.precio = this.precio * 1.21;
    }
    //Para restar una vez que el usuario haya seleccionado algun objeto
    restarStock(){
        this.stock= this.stock-1;
        console.log(`El stock de ${this.nombre} cambio`);
    }
}

const cubos = [];
cubos.push(new Productos(0," 3 x 3", "MoYu", 735.53, 500))
cubos.push(new Productos(1," 3 x 3", "Hasbro", 2264.46, 30))
cubos.push(new Productos(2," 3 x 3", "Qiyi", 784.29, 500))
cubos.push(new Productos(3," 2 x 2", "MoYu", 570.24, 100))


console.table(cubos.sort(Productos.precio));

for(const Productos of cubos) 
Productos.iva()
// esto es para ordenar los productos sin importat el ID
cubos.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });


//Carrito de compras

const carrito = []// queda vacio porque no sabemos que se agregara despues
// let poductosOfrecidos =""

//Accion de agregar al carito de parte del usuario
// function agregarCarrito() {

//     for(item of stock_Nuevo){
//         paraVender += `\n ${item.id} - ${item.nombre} tiene un precio de $${item.precio} por unidad`
//     }   
// }
// Para mostrar al usuario que producto fue el que eliogio y se agrego al carrito
function asignarProducto(prodElegido) { 
    carrito.push(cubos[prodElegido])
    alert(`Agregamos al carrito el producto ${cubos[prodElegido].nombre}`)
    cubos[prodElegio].restarStock()
 }  
//Agregar productos al carrito
 function agregarCarrito(){
    for(const items of cubos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML=`<h4>Producto agregado</h4>
                            <spam>${items.id}</spam>
                            <p>${items.modelo}</p>
                            <p>${items.marca}</p>
                            <p>${items.precio}</p>`
    }
}

const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaProductos = document.querySelector('#lista-productos')
let articulosCarrito =[];

cargarEventListeners();
function cargarEventListeners(){
    //cuando se agrega un producto al carrito "agregar al carrito"
    listaProductos.addEventListener('click' , agregarProducto)

    //Eliminar un producto del carrito "Remover"
    carrito.addEventListener(`click`, eliminarProducto);

    //Muestra los productos del local Storage
    document.addEventListener('DOMcontentLoaded', ()=> {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        carritoHTML();
    })


    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = []; //Reset

        limpiarHTML();//Eliminamos todo
    })
}

function agregarArticulo (e) {  }