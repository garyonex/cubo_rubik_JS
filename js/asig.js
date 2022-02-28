function inicio(){
let ingreseNombre = prompt("Ingrese su nombre");
    console.log(ingreseNombre);
let ingreseApellido = prompt("Ingrese Apellido")
    console.log(ingreseApellido)
let salida = "Hola =) Bienvenidos Cuber@" + " " + ingreseNombre + " " + ingreseApellido;
    alert(salida);
    console.log (salida)
}

inicio();

let cuantosCompra = parseInt(prompt("¿Cuantos cubos desea?"));
let cuantosSalida = "Usted desea comprar" + cuantosCompra
    console.log(parseInt(cuantosCompra));

    if (parseInt(cuantosCompra) < 50) {
        alert("Desea compra al menor la cantidad de" + " " + cuantosCompra )
    }
    else if(cuantosCompra ==""){
        alert("Error : No ingreso cantidad")
    }else{
        alert("Desea comprar al MAYOR la cantidad de" + " " + cuantosCompra)
    }

const suma = (a ,b) =>{
    return a + b
}
const resta = (a ,b)=>{
    return a- b
}
const multiplica = (a ,b)=>{
    return a *b
}
let iva = 0.21;
let bruto = 449.81;
let tasa = 0.10;

/*let numeroSumar =parseInt(cuantosCompra)
    
let y = suma(numeroSumar , 10)
alert(y)
console.log(y)
let resultado = multiplica (y, iva)
alert(resultado)*/

function _contado(){
    let x = multiplica( bruto , iva);
    let w = suma( x, bruto);
    let respuesta = multiplica( w , cuantosCompra);
    let mensaje =`Su compra seria ${respuesta}`
        return mensaje

}
function _credito(){
    let x = multiplica( bruto, iva)
    let w = suma(x, bruto)
    let tc = multiplica (w, tasa)
    let respuesta = suma ( tc , w)
    let mensaje =`Su compra seria con Tarjeta de credito ${respuesta}`
        return mensaje
}

let compraCon = prompt("Paga en Efectivo o Tarjeta");
let compraConSalida = `Su forma de pago sera en ${compraCon}`
    console.log(compraCon)
let efectivo = _contado()
    alert(efectivo)

let tarjeta = _credito()
    alert(tarjeta)

    if( compraCon == "efectivo"){
        _contado()
        alert(efectivo)  
    }
    else if(compraCon == "Efectivo"){
        _contado()
        alert("paga")
    }

    else if(compraCon == "Tarjeta"){
        _credito()
    }
    else if(compraCon != ""){
        alert("Error")
    }
    else if(compraCon == "tarjeta") {
        _credito()
        alert(tarjeta)
    }
    else{
        alert("error")
    }
