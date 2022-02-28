
  
   let nombreIngresado = prompt("Ingrese su nombre");
   console.log(nombreIngresado);

   let salida = "Hola speedcubers" + " " + nombreIngresado;
   console.log(salida)
 

   /* primera parte de la tarea*/

   let ingreseNumero = prompt("Cual es su numero Favorito");
   console.log(parseFloat(ingreseNumero));

   if (parseFloat(ingreseNumero) < 500) {
      alert("El numero ingresado es menor que 500");
   }
   else if (parseFloat(ingreseNumero)<999) {
      alert("El numero ingresado es menor que 1000");
   }
   else if (ingreseNumero ==""){
      alert("Error : no ingreso numero")
   }else{
      alert("el numero ingresado es mayor que 1000 ¡FELICITACIONES!")
   }
//Segunda parte de la asignacion

   let unHola = prompt ("Escribe un HOLA")
    if (unHola == "Hola"){
       console.log("El usuario escribio correctamente Hola")
    } else {
       console.log("El usuario NO escribio correctamente Hola")
    }


   let y = prompt("¿Desde que pais nos visitas?");
    if (y == "Argentina"){
       console.log("El usuario escribio correctamente -Argentina-")
    } else {
       console.log("el usuario no escribio correctamente -Argentina-")
    }
   let z = prompt("¿Ciudad de nacimiento?");
   let ultimo = y + " " + z;
   alert(ultimo);

//Terceta parte de la asignacion

    let unNumero = prompt("Ingrese un numero que este entre el 0 y el 60")
    console.log(parseFloat(unNumero));
      if (parseFloat(unNumero) < 10){
         alert("El numero ingresado es ganador ¡FELICIDADES!")
      } else if (unNumero ==""){
         alert("Error : no ingreso numero");

      }else if((parseFloat(unNumero) < 50)){
         alert("El numero ingresado es ganador ¡FELICIDADES!");
      } else{
         alert("El numero ingresado NO ES EL GANADOR")
      };


   for (let index = 0; index < 10; index++) {
      if(index == 5){
         continue
      }
        if(index == 5){
          break
      }
      console.log(`index --> ${index}`);
   }
