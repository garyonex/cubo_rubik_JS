function inicio(){
    let ingreseNombre = prompt("Ingrese su nombre");
        console.log(ingreseNombre);
    let ingreseApellido = prompt("Ingrese Apellido")
        console.log(ingreseApellido)
    let salida = "Hola =) Bienvenidos Cuber@" + " " + ingreseNombre + " " + ingreseApellido;
        alert(salida);
        console.log (salida)
    }
function chao(){
    //alert("Gracias por visitarnos")
    let _chaoSalida = ("Siganos en nuestras redes sociales")
    alert(`Graicas por visitarnos ${_chaoSalida}`)
    return alert

}
    inicio();
    compraRealizar()
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
    alert(`Usted comprara ${cantidadCompra} unidades, el monto a pagar es de ${multiplicaDatos} incluido intereses`)
        let responde = prompt(`Desea continuar con la compra?`)
        if(responde == "si"){

            alert("Gracias por su compra")
        }else if (responde == "no"){
            alert("Disculpe las molestias")
        } else{
            alert("Por favor responda SI o NO")
        }
}   

function _multiplo( y1){
    let sumamos = y1 * 500
    return sumamos
    
}

function intereses(n1){
    const x = 449.89
    const y = 0.10
    let multi = n1 * x 
    let inte= multi * y
    alert(`Los intereses seran de ${inte}`)
    let resulta = multi + inte 
    console.log(resulta)
    return resulta;
}
    chao()
    inicio()
    compraRealizar()
    chao()