//Solicitar nonbre y apellido del comprador del producto
//solicitar edad y pais donde viven para registrarlos en base de datos (proxi)

class comprador{
    constructor(nombre, apellido,){
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
   
    }
    hablarSaludo(){
        if(nombre, apellido){
            console.log(`Usuario registrado ${this.nombre} ${this.apellido}`);
            alert(`Usuario registrado \n ${this.nombre} ${this.apellido}`)
        }
        else{
            alert("Usuario NO registrado")
        }
    
    }
    
}   


const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
// const edad = prompt("Cual es su edad?")
// const pais = prompt("De que pais es?")

const usuario2 = new comprador(nombre, apellido)
usuario2.hablarSaludo()
alert(`Gracias por suscribirte ${nombre.toUpperCase()} ${apellido.toUpperCase()}`)


class articulo{
    constructor(modelos, marcas, tipos, precio,cliente){
        this.modelos = modelos;
        this.marcas = marcas;
        this.tipos = tipos;
        this.precio = parseFloat(precio);
        this.comprador = cliente;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
        console.log(this.precio);
    }
    
}
const articulo1 = new articulo("3 x 3", "moyu", "Cubo", 759.49,(usuario2.nombre + usuario2.apellido))
//const articulo2 = new articulo("3 x 3", "Qiyi", "Cubo", 859.49, (usuario3.nombre) )
console.log(articulo1);
articulo1.sumaIva();


function chao(){
  
    let _chaoSalida = ("Siganos en nuestras redes sociales")
    alert(`Gracias por visitarnos ${_chaoSalida}`)
    return alert

}


const precioMoyu2 = 690;
const precioMoyu3 = 890;
const precioQiyi3 = 949;

class personaRegistrada{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido= apellido;
    }
    
}
const listaRegistrados = [];
const nuevoRegistro = new personaRegistrada(usuario2.nombre , usuario2.apellido)
listaRegistrados.push(nuevoRegistro);
console.log(listaRegistrados);

const addPerson =() =>{
    class personaRegistrada{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido= apellido;
        }
        
    }
    const nuevoRegistro2 = new personaRegistrada(nombre,apellido)
    nuevoRegistro2.nombre = prompt("Ingrese su nombre")
    nuevoRegistro2.apellido = prompt("Ingrese su apellido")
    listaRegistrados.push(nuevoRegistro2.nombre, nuevoRegistro2.apellido)
    // console.log(listaRegistrados.join("\n"));
    console.log(listaRegistrados.concat(nuevoRegistro2))

}
function compraRealizar(){
    let cuantosCompra =(prompt("Desea realizar una compra?"));
        if(cuantosCompra == "si"){
            alert("Respondio que si, continuemos con la compra")
        
                let _tarjetaEfectivo = prompt("Forma de pago? Tarjeta o Efectivo")
                    if(_tarjetaEfectivo == "tarjeta"){
                        alert("Usted pagara con tarjeta")
                        _credito()
                    }
                    else if (_tarjetaEfectivo == "efectivo"){
                        alert("Usted pagara con efectivo")
                        _contado()
                    }
                    else {
                        alert("ERROR : No indico forma de pago")
                    }
        }else if(cuantosCompra =="no"){
            alert("Usted respondio que NO, muchas gracias por la visita");
        }else if(cuantosCompra =="NO"){
            alert("Usted respondio que NO, muchas gracias por la visita");
        }
        else{
            alert("no respondio pregunta")
            let cantidadCompra = parseInt(prompt("cuantos desea comprar?"))
            console.log (cantidadCompra)
        }
    }
    function _credito(){
        let cantidadCompra = parseInt(prompt("cuantos desea comprar?"))
                if(parseInt(cantidadCompra) <50){
                    alert("Desea realizar una compra al MENOR de" + " " + cantidadCompra)
                    
                } else if(parseInt(cantidadCompra) >=50){
                    alert("Usted desea realizar compra al MAYOR de" + " " + cantidadCompra);
                } else{
                    alert("no ingreso valor valido")
                }
      
       alert(`Usted comprara ${cantidadCompra} unidades, el monto a pagar es de ${intereses(cantidadCompra)} incluido intereses`)
       // alert ("compra" + " " +  cantidadCompra + " " + "interes con tarjeta" + " = " + intereses(cantidadCompra))
            let responde = prompt(`Desea continuar con la compra?`)
            if(responde == "si"){
    
                alert("Gracias por su compra")
            }else if (responde == "no"){
                alert("Disculpe las molestias")
            } else{
                alert("Por favor responda SI o NO")
            }
            _chaoSalida()
    }   
    function _contado(){
        let cantidadCompra = parseInt(prompt("cuantos desea comprar?"))
                if(parseInt(cantidadCompra) <50){
                    alert("Desea realizar una compra al MENOR de" + " " + cantidadCompra)
                    
                } else if(parseInt(cantidadCompra) >=50){
                    alert("Usted desea realizar compra al MAYOR de" + " " + cantidadCompra);
                } else{
                    alert("no ingreso valor valido")
                }
       _multiplo(cantidadCompra)
        alert(`Usted comprara ${cantidadCompra} unidades, el monto a pagar es de ${multiplicaDatos(cantidadCompra)}`)
            let responde = prompt(`Desea continuar con la compra?`)
            if(responde == "si"){
    
                alert("Gracias por su compra")
            }else if (responde == "no"){
                alert("Disculpe las molestias")
            } else{
                alert("Por favor responda SI o NO")
            }
            _chaoSalida()
    }   

    _chaoSalida()
    
    function _multiplo(y1){
        let sumamos = y1 * 500
        return sumamos
        
    }

    
    function intereses(n1){
        const y = 0.10
        let multi = n1 * precioMoyu2
        let inte= multi * y
        alert(`Los intereses seran de ${inte}`)
        let resulta = multi + inte 
        console.log(resulta)
        return resulta;
    }

    function multiplicaDatos(m1){
        let total = m1 * precioMoyu2
        return total
    
    }
    class Productos{
        constructor(id,modelo, marca, precio,stock){
            this.id=id;
            this.modelo = modelo;
            this.marca = marca;
            this.precio = parseFloat(precio);
            this.stock= stock;
    
        }
        iva(){
            this.precio = this.precio * 1.21;
        }
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
       
      