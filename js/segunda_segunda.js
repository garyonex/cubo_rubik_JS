let contCompra = document.querySelector("#contenedorCompras")
let contTodos = document.querySelector("#contenedorTodos")

//eventos para los botos de agregar al carito

let miCompra = document.querySelector("#btnCompra");
miCompra.setAttribute('marcador', cubos_stock.id);

miCompra.addEventListener('click', agregarCarrito);

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
        this.precio =  this.precio * 1.21;
    }
    //Para restar una vez que el usuario haya seleccionado algun objeto
    restarStock(){
        this.stock= this.stock;
        console.log(`El stock de ID - ${this.id} cambio`);
    }
}

const cubos_stock = [];
cubos_stock.push(new Productos(0," 3 x 3", "MoYu", 735.53, 1000))
cubos_stock.push(new Productos(1," 3 x 3", "Hasbro", 2264.46, 3000))
cubos_stock.push(new Productos(2," 3 x 3", "Qiyi", 784.29, 500))
cubos_stock.push(new Productos(3," 2 x 2", "MoYu", 570.24, 100))
cubos_stock.push(new Productos(4," 3 x 3", "Qiyi", 111119, 500))


console.table(cubos_stock);


const carrito=[]

// Para mostrar al usuario que producto fue el que eligio y se agrego al carrito
function asignarProducto() { 
    cubos_stock.forEach((prodElegido) =>{
        carrito.push(cubos_stock[prodElegido])
        console.log(`${prodElegido.modelo} ${prodElegido.marca}`)
        })
 
 }      
 
//Funcion para agregar productos al carrito de compra   
 function agregarCarrito(){
     cubos_stock.forEach((info) =>{
        contCompra.innerHTML=`
        <h4 class="carrito_compra">Producto agregado</h4>
        <p class="carrito_item">${info.id}</p>
        <p class="carrito_item">${info.modelo}</p>
        <p class="carrito_item">${info.marca}</p>
        <p class="carrito_item">${info.precio}</p>`
     });
    
    asignarProducto(carrito.push(cubos_stock.id))// no se como hacer para que el usuario al seleccionar el producto esta parte aqui cambie
    mostrarCarrito()
 }
 function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
   mostrarCarrito();

}
 let precioCarrito = 0;

function mostrarCarrito() {
    cubos_stock.forEach((e) =>{
        productosCarritos = `\n Modelo: ${e.marca} - Marca:${e.modelo} - `
        precioCarrito = e.precio
    })
    console.log(`Repasemos: ${productosCarritos} \n por un precio de: ${precioCarrito}`)
    
}


