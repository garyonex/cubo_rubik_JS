// let button = document.getElementById('miBtn').addEventListener('click', function (){
//     alert("funcion anonima")
// })



const showAlert = () =>{
    alert('BIENVENIDOS')
}


document.getElementById('miBtn').addEventListener('click', showAlert)

//CODIGO JS
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onkeyup   = () => {console.log("keyUp")};
input2.onkeydown = () => {console.log("keyDown")};