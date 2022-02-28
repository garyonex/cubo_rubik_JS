//LISTA DE PRODUCTOS EN VENTA

class Productos{
    constructor(id, modelo, marca, precio, img){
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.img = img


    }
    iva(){
        this.precio = this.precio * 1.21;
    }
}

const cubos_stock = [];
//PRODUCTOS, DISEÑOS 
cubos_stock.push(new Productos(1," 3 x 3", "MoYu", 735.53, 'img/moyu_3x3.jpg'))
cubos_stock.push(new Productos(2," 3 x 3", "Qiyi", 784.29, 'img/qiyi_3x3.jpg'))
cubos_stock.push(new Productos(3," 2 x 2", "MoYu", 570.24,' img/moyu_2x2.jpg'))

// Variable del carro siempre estara vacia si esta de esta forma

let carrito = []
const tarjProductos = document.querySelector('#carrito_compras')
const domCarrito = document.querySelector('#carritoDom')
const domTotal = document.querySelector('#total')
const domVaciar = document.querySelector('#btn-vaciar');
domVaciar.addEventListener('click' , vaciarCarro);

//Crear tarjetas para los productos en venta
function productosVenta() {  
cubos_stock.forEach((info) => {

  const card_prod = document.createElement('div')
  card_prod.classList.add('card')

  const card_cuerpo = document.createElement('div')
  card_cuerpo.classList.add('card-body')

  const titulo_card = document.createElement('h5')
  titulo_card.classList.add('titulo-card')
  titulo_card.textContent= info.marca, info.modelo;
  const modelo_card = document.createElement('h6')
  modelo_ca.classList.add('titulo-card-modelo')
  modelo_ca.textContent= info.modelo;

  const imag_card = document.createElement('img')
  imag_card.classList.add('img-carta')
  imag_card.setAttribute('src', info.img)
  // imag_card.src = ('./img/', info.img)
  

  const precio_card = document.createElement('p')
  precio_card.classList.add('precio-carta')
  precio_card.textContent = `$ ${info.precio}`

  const boton_card = document.createElement('button')
  boton_card.classList.add('btn-card')
  boton_card.textContent = 'Agregar'
  boton_card.setAttribute('marcador',info.id)
  boton_card.addEventListener('click' , anyadirProductoAlCarrito)

  card_cuerpo.appendChild(imag_card)
  card_cuerpo.appendChild(titulo_card)
  card_cuerpo.appendChild(precio_card)
  card_cuerpo.appendChild(boton_card)
  card_prod.appendChild(card_cuerpo)
  tarjProductos.appendChild(card_prod)
  });

}

productosVenta()


// //Funcion para agregar productos al carrito de compra   
// function agregarCarrito(){
//   cubos_stock.forEach((info) =>{
//      contCompra.innerHTML=`
//      <h4 class="carrito_compra">Producto agregado</h4>
//      <p class="carr_item">${info.id}</p>
//      <p class="carr_item">${info.modelo}</p>
//      <p class="carr_item">${info.marca}</p>
//      <p class="carr_item">${info.precio}</p>
//      <img class="carr_item-img" src="${info.img}">`
//   });
 
//  //asignarProducto(carrito.push(cubos_stock.id))// no se como hacer para que el usuario al seleccionar el producto esta parte aqui cambie

// }


function anyadirProductoAlCarrito(e){
  carrito.push(e.target.getAttribute('marcador'))
  addCardProduct();

}

//anyadir los productos al carrito

function addCardProduct(){

  domCarrito.textContent= '';
  const carritoNodoble =[...new Set(carrito)];

  carritoNodoble.forEach((item) =>{
    const miItem = cubos_stock.filter((itemCubos) =>{
      return itemCubos.id === parseInt(item);
    });
    const sumaUnidades = carrito.reduce((total,itemId)=>{
      return itemId === item ? total += 1: total;
    },0);

    const card_prod = document.createElement('li')
    card_prod.classList.add('lista_productos');
    card_prod.textContent = `${sumaUnidades} x ${miItem[0].marca} -${miItem[0].modelo} - $ ${miItem[0].precio}`
    
    //BOTON PARA BORRAR

    const boton_card = document.createElement('button');
    boton_card.classList.add('btn_borrar');
    boton_card.textContent = 'BORRAR';
    boton_card.dataset.item= item;
    boton_card.addEventListener('click', borrarItemCarro)
    
      card_prod.appendChild(boton_card)
      domCarrito.appendChild(card_prod)
  });

  domTotal.textContent = calcularTotal();

}

function borrarItemCarro(evento) { 
  const id = evento.target.dataset.item;
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  addCardProduct();
 }

 function calcularTotal() { 
   return carrito.reduce((total, item) =>{

    const miItem = cubos_stock.filter((itemCubos)=>{
      return itemCubos.id === parseInt(item)
    });
    return total + miItem[0].precio;

   },0 ).toFixed(2)
  }

function vaciarCarro() {
    carrito=[];
    
    addCardProduct();
 }

 // Eventos
domVaciar.addEventListener('click', vaciarCarro);