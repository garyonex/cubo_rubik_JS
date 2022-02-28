//utilizando jquery para crear y tener eventos de formulario
$("#contenedor-form").append(`<form id="formulario">
                    <label>Nombre</label>
                    <input type="text" class="iTex" name="nombre" required>
                    <label>Apellido</label>
                    <input type="text" class="iText" name="apellido" required>
                    <label>Email</label>
                    <input type="email" class="iText" name="email">
                        <div id="Btn2">
                           <input type="submit">
                        </div>
                </form>`)

$("#formulario").submit(function(e){
    e.preventDefault();
    alert("Gracias");
   
    let hijos =$(e.target).children();
    
    $("body").append(`</div><h3></h3>
                             <p class="form_dom">${hijos[1].value}</p>
                             <p class="form_dom">${hijos[2].value}</p>
                             <p class="form_dom">${hijos[3].value}</p>
                        </div>`)
   
  
});


$("#formulario").change(function(e){
    console.log(e.target.value);
});

$("#Btn2").click(()=>{
    
    $("#myForm").trigger("change")
})
// AGREGAR AJAX AL PROYECTO
function validaForm(){
    // Campos de texto
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").focus();
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").focus();
        return false;
    }

    // Checkbox
    if(!$("#mayor").is(":checked")){
        alert("Debe confirmar que es mayor de 18 años.");
        return false;
    }

    return true; // Si todo está correcto
}
$(document).ready( function() {   // Esta parte del código se ejecutará automáticamente cuando la página esté lista.
    $("#Btn2").click( function() {     // Con esto establecemos la acción por defecto de nuestro botón de enviar.
                                       // Primero validará el formulario.
            $.post("https://jsonplaceholder.typicode.com/posts",$("#formulario").serialize(),function(res){
                $("#formulario").fadeOut("slow");   // Hacemos desaparecer el div "formulario" con un efecto fadeOut lento.
                if(res == 1){
                    $("#exito").delay(500).fadeIn("slow");      // Si hemos tenido éxito, hacemos aparecer el div "exito" con un efecto fadeIn lento tras un delay de 0,5 segundos.
                } else {
                    $("#fracaso").delay(500).fadeIn("slow");    // Si no, lo mismo, pero haremos aparecer el div "fracaso"
                }
            });
        
    });    
});
//animaciones

$(".fondo").fadeOut(2000, function () { 
    $(".fondo").fadeIn(1000, function(){
        $(".fondo").fadeOut(2000, function () { 
            $(".fondo").fadeIn(1000, function(){
                $(".fondo").fadeOut(2000, function () { 
                    $(".fondo").fadeIn(1000)
                 })
            })
         })
    })
 })
    