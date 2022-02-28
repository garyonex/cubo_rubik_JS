//Primera parte de la asignacion
let ingreseNumero =  parseInt(prompt("Ingrese numero"))

for (let i = 5; 1 <= 10; i++){
    
    let resultado = ingreseNumero + i;
     alert("sumanos su numero" +" " + ingreseNumero +" + "+ i +" = "+ resultado);
    if(i==10){
        break
    }
}
//let ingreseTexto = prompt("Ingrese nombre para generar turno")

for (let i = 1; 1 <= 10; i++){
    let turno = prompt("Ingrese nombre para generar turno");
        alert("Turno Nº" +i+ " "+"Nombre: "+turno)
    if(i==3){
        break
    }
}

let uno = prompt("Ingrese Contraseña")
    console.log(uno)
while(uno != "ESC"){
    switch (uno){
        case "martin":alert("hola MARTIN");
        break;
        case "Martin":alert("hola MARTIN");
        break;
        case "MARTIN":alert("hola MARTIN");
        break;
        case "Gary":alert("hola GARY");
        break;
        case "gary":alert("hola GARY");
        break;
        case "GARY":alert("hola GARY");
        break;
        default:
            alert("¿Contraseña incorrecta?")
    }
    uno = prompt("Ingrese Contraseña")
    console.log(uno)
}
let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));

     