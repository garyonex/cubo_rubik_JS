// $('body').append("<h2><p>Hola aqui se agrega algo</p></h2>");

// //array de productos 
// const productos = [
//     {id: 2, nombre: "arroz", precio:150},   
//     {id: 3, nombre: "papa", precio:2000}
// ];
// //creamos DOM por cada objeto del array
// for (const producto of productos){
//     $("#app").append(`<div>
//     <h2> nombre: ${producto.nombre} </h2>
//     <h2> precio: ${producto.precio} </h2>
//     <button id="btn${producto.id}">Comprar</button>
//     </div>`);
//     //Creamos un boton a cada uno de los objetos ya creados en el DOM
//     //Mediante la consola mostramos la accion que se realiza en el boton
//     $(`#btn${producto.id}`).on('click', function () {
//         $("#comprados").append(
//             `<p>Compraste</p>
//             <h3>${producto.nombre}</h3>`
//         )
//         console.log(`compraste ${producto.nombre}`)
// })
// }

// CLICK viene a ser un atajo para el .on que esta en la function de arriba
//agregamos dos botones con jquery
$("body").prepend('<button id="btn1">boton</button>');
$("body").prepend('<button id="btn2">boton</button>');

//asociamos el evento click para boton1
$("#btn1").click(function(){
    console.log(this);
});
//Evento click para btn2 con arrow function y parametro e
$("#btn2").click((e)=>{
    console.log(e.target);
})

//Agregamos inputs con jquery

$("body").prepend(`<input type="text" class="inputsClass">
                <input type="number" class="inputsClass">
                <select class="inputsClass">
                    <option value="1" selected> ID 1</option>
                    <option value="2"> ID 2</option>
                    <option value="3"> ID 2</option>
                    </select>`);

//asociamos el evento "change" a todos los inputs
$(".inputsClass").change(function (e){
    console.log(e.target.value);
    console.log(this.value);
});

// $("body").prepend('<button id="btn3">BOTON</button>')
// $("body").prepend('<input id="ipt1" type="text">')

// $("#ipt1").change((e)=>{
//     alert("el valor es "+e.target.value);
// });

// $("#btn3").click(()=>{
//     $("#ipt1").trigger("change");
// })

//array de productos 
const productos = [
    {id: 1, nombre: "arroz", precio:150},   
    {id: 2, nombre: "papa", precio:1200},
    {id: 3, nombre: "pepino", precio:200},
    {id: 4, nombre: "queso", precio:500}
];

$(document).ready(function(){
    $(".btnComprar").click(function (e) {
        let hijos = $(e.target).parent().children();
        console.log(hijos[0].value);
        $(e.target).parent().slideUp(2000)
      });
});

for (const producto of productos){

    $("#app").append(`<div>
                            <input value = "${producto.id} ${producto.nombre}" type="hidden">
                            <h4 style="display:"> Producto : ${producto.nombre}</h4>
                            <h5 style="display:">Hola</h5>
                            <b> $ ${producto.precio}</b>
                            <button class= "btnComprar">Comprar</button>
                            </div>`);
}
// $("h4").slideDown(2000)
// $("h4").fadeOut("slow", function () {
//     $("h4").fadeIn(2000, function () {
//         $("h4").slideUp(3000)
//       })
//   })

// $("body").prepend('<button id="btn9">Motrar</button>');
// $("body").prepend(`<div id="div4" style="height: 120px">
//                         <h3>Hola pendejo</h3>
//                         <h4>Sorpresa</h4>
//                     </div>`);
// $("#btn9").click(()=>{
//     $("#div4").toggle("fast") //  toggle es el mismo que los anteriores combinado
// })


// $("body").prepend(`<div>
//                         <a> Ir a contacto</a>
//                         <p style="height: 100px"></p>
//                         <section id="seccionContacto">
//                             <h1 class="titulo">Somos nosotros</h1>
//                         </section>
//                     </div>`);

// $('a').click( function(e){
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: $("#seccionContacto").offset().top
//     },2000);
// })

// $(".titulo").animate({
//     left:'250px',
//     opacity:'0.5',
//     heigjt:'150px',
//     width:'150px'},
//     2000,
//     function(){
//         console.log("final de animacion");
//     }
// )

// $(".titulo").css({
//     "color": "blue",
//     "font-size": "40px",
//     "border": "5px solid red"
// })

// $("body").prepend('<p id="p1">Gary calle</p>');

// $("#p1").css("color", "blue").slideUp(3000).delay(5000).slideDown(2000)

        


$(document).ready(function() {  

    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            //Get the A tag
            var id = $(this).attr('href');
    
            //Get the screen height and width
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();
    
            //Set height and width to mask to fill up the whole screen
            $('#mask').css({'width':maskWidth,'height':maskHeight});
            
            //transition effect             
            $('#mask').fadeIn(1000);        
            $('#mask').fadeTo("slow",0.8);  
    
            //Get the window height and width
            var winH = $(window).height();
            var winW = $(window).width();
          
            //Set the popup window to center
            $(id).css('top',  winH/2-$(id).height()/2);
            $(id).css('left', winW/2-$(id).width()/2);
    
            //transition effect
            $(id).fadeIn(2000); 
    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask, .window').hide();
    });             
    
    //if mask is clicked
    $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
    });                     
    
});