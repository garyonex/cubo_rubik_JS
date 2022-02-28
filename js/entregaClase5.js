//Solicitar nonbre y apellido del comprador del producto
//solicitar edad y pais donde viven para registrarlos en base de datos (proxi)

class comprador{
    constructor(nombre, apellido, edad, pais){
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.edad = edad;
    this.pais = pais;
    }
    hablarSaludo(){
        if(nombre, apellido){
            console.log(`Usuario registrado ${this.nombre} ${this.apellido}`);
            alert(`Usuario registrado ${this.nombre} ${this.apellido}`)
        }
        else{
            alert("Usuario NO registrado")
        }
    
    }
    
}   


const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = prompt("Cual es su edad?")
const pais = prompt("De que pais es?")

const usuario2 = new comprador(nombre, apellido)
usuario2.hablarSaludo()
alert(`Gracias por suscribirte ${nombre} ${apellido}`)


class articulo{
    constructor(modelos, marcas, tipos, precio,cliente){
        this.modelos = modelos;
        this.marcas = marcas;
        this.tipos = tipos;
        this.precio = parseFloat(precio);
        this.comprador = cliente;
    }
    sumaIva(){
        this.precio = this.precio * 0.21;
        console.log(this.precio * 0.21 + this.precio);
    }
    
}
const articulo1 = new articulo("3 x 3", "moyu", "Cubo", 759.49,(usuario2.nombre + usuario2.apellido))
//const articulo2 = new articulo("3 x 3", "Qiyi", "Cubo", 859.49, (usuario3.nombre) )
console.log(articulo1);
articulo1.sumaIva();


    
const button = document.querySelector('.usuarioRegistrado')
button.onclick = function () {
    const usuario2= new comprador(nombre, apellido)
        usuario2.hablarSaludo(nombre, apellido)
        

}

function chao(){
  
    let _chaoSalida = ("Siganos en nuestras redes sociales")
    alert(`Gracias por visitarnos ${_chaoSalida}`)
    return alert

}