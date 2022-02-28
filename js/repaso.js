// let lista = [1, 3, 5, 7, 9]
// lista.map((value) =>{
//     console.log('value:' , value);
// })

// let filterList = lista.filter((e) =>{
//     return e> 5
// })

// let findList =lista.find((e) =>{return e==5})


// /*Storage / JSON*/

// localStorage.setItem('localstorage', 'Gary')
// localStorage.setItem('loscalstorage-list',JSON.stringify(lista))


// // let byClass = document.getElementsByClassName('container')
// let byId = document.getElementById('contenedor')

// // let opt1= document.getElementsByTagName('div')
// // let opt2 = document.querySelector('.container')
// // let opt3 = document.querySelectorAll('.contenedor')


// byId.textContent='Hola mundo'
// byId.style.background = 'red'
// byId.style.width= "100px"
// byId.style.height= "300px"

// byId.onclick = () =>{
//     alert('Presionaste el div')
// }

// byId.addEventListener('click', (event) =>
// alert('aceptar'))


// let form = document.getElementById('miForm')

// form.onsubmit = (event) => {
//     event.preventDefault()
//     let value = document.getElementsByTagName('miInput').value
//     if (value == 'gary'){
//         alert('Error')
//     }else{
//         alert('Hola bienvenido')
//     }

//     console.log(value);
// }


let myFormulario = document.getElementById("miForm");
myFormulario.addEventListener("submit", validarForm);
// const jeyson = JSON.stringify(myFormulario)
// console.log(jeyson);

function validarForm(e) {
    e.preventDefault();
    // let value= document.getElementsById('name').value
    // console.log(value);
    // let valueDos =document.getElementsById('apellido').value
    // console.log(valueDos);

    let formula = e.target
    console.log(formula.children[1].value);
    console.log(formula.children[3].value);
    console.log(formula.children[5].value);
    const jeyson = JSON.stringify(formula)

}
