//Relacionado con los usuarios que se registren

class usuarioRegistrado {
    constructor(nombre, apellido, email) {
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.email = email;
    }
}
// Variables

let arrayUsuarios =[];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre")
let inputApellido = document.querySelector("#iApellido")

let nombreI = formulario.children[1].value;
let apellidoI = formulario.children[3].value;
let emailI = formulario.children[5].value;

let contenedor = document.querySelector("#usuarioNuevo")
let mostrarTodos = document.querySelector("#mostrarTodos")
let parrafos = mostrarTodos.getElementsByTagName("p")
let bandera = false;

// eventos para los botones necesarios en el formulario

miFormulario.addEventListener("submit", agregarUsuario);
btnMostrar.addEventListener('click', MostrarTodosUsuarios);

// activamos focus en el primer input

// inputNombre.focus();

// funciones

function validarForm(){
    nombreI = formulario.children[1].value;
    apellidoI = formulario.children[4].value;
    emailI = formulario.children[7].value;
    console.log(nombreI);
    console.log(apellidoI);
    console.log(emailI);

    if(nombreI == "" || apellidoI == "" || emailI =="") {
        alert("Error - Por favor complete los datos solicitados");
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

//Agregar usuarios registrados al array de usuarios

function agregarUsuario (e) { 
    e.preventDefault();
    validarForm(); // esto es para validar que todos los datos del form esten bien
    if( bandera == true){
        let option = confirm("Esta seguro de suscribirse?");
        if(option == true){
            let formulario = e.target
            arrayUsuarios.push(new usuarioRegistrado(nombreI, apellidoI, emailI));
            ;
        } else{
            alert('No se agregara el usuario')
        }
        formulario.children[1].value = '';
        formulario.children[3].value = '';
        formulario.children[5].value = '';
        contenedor.innerHTML = '';
        agregarAlDom();
    } else{
        inputNombre.focus();
    }
 }

 // para mostrar en DOM el ultimo usuario ingresado

 function agregarAlDom() {
     contenedor.innerHTML = `<h4>Ultimo usuario Registrado</h4>
     <p class="form_dom"><b>Nombre : </b>${nombreI}</p>
     <p class="form_dom"><b>apellido: </b>${apellidoI}</p>
     <p class="form_dom"><b>Email: </b>${emailI}</p>
     <hr>`;
   }


   // para mostrar todos los usuarios 

   function MostrarTodosUsuarios(e) { 
       e.preventDefault();
       let i = 0;
       mostrarTodos.innerHTML = `<h4>Listado de usuarios registrados</h4>`;
       for( const usuario of arrayUsuarios) {
           mostrarTodos.innerHTML += `
           <p class="form_dom"><b>Nombre: </b>${usuario.nombre}</p>
           <p class="form_dom"><b>Apellido: </b>${usuario.apellido}</p>
           <p class="form_dom"><b>email: </b>${usuario.email}</p>
           <hr>`
       }
    }
