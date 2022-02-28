// let inpurtValue = document.querySelectorc ('.input').valie;

// let contenedorCajas =  document.querySelector ('.contenedorCajas');

// let arrayContenedores = document.getElementsByClassName('contenedor')[0]

// console.log(arrayContenedores)
// carrito de compras tipo sencillo


// let producto1 = {precio : 10}
// let producto2 = {precio : 50}

// let carrito = [producto1, producto2]
// function calcularTotal() {
//     let total = 0
//     carrito.map((value) => { // analizar porque el value se pone dentro de esta forma
//         total= value.precio + total
//     })
//     return total
// }

// console.log(calcularTotal());


class Mundo {
    constructor(){
        this.persona=[]
        this.edadesTotales = 0
    
    }
    addPerson(persona){
        this.persona.push(persona)
    }
}

class Persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.imagen ='../img/logo.jpg';
    }

}

const miMundo = new Mundo()
const persona1 = new Persona('Gary calle', 30)
const persona2 = new Persona('Aixa Vivas', 32)
const persona3 = new Persona('Sansha ky', 11)

miMundo.addPerson(persona1)
miMundo.addPerson(persona2)
miMundo.addPerson(persona3)

console.log(miMundo)

const initMundo = () => {
    const lista =  document.querySelector(".contenedor")
    miMundo.persona.map((person) => {
        const miniContenedor = document.createElement('div')
        const name = document.createElement("h1")
        const age = document.createElement('span')
        const image = document.createElement('img')
        

        miniContenedor.className = "person-item"

        name.textContent = `Nombre : ${person.nombre}`
        age.textContent = `Edad: ${person.edad}`
        image.src = person.image
        image.width = 300
        image.height = 300

        lista.appendChild(miniContenedor)

        miniContenedor.appendChild(name)
        miniContenedor.appendChild(age)
        miniContenedor.appendChild(image)
    })
    console.log(lista)
}

initMundo()// si no establezco la funcion nunca se vera reflejado en el html

function search(){
    let value = document.getElementById('buscador').value// para ver el resultado de la busqueda en el input
    // console.log(value);
    let person = miMundo.persona.find(element => element.nombre.includes(value));
   //. find retorna un valor referente a que evalue
   // el include es para que al colocar cualquier nombre parecido al de la bsuqueda aparezca, sea minuscula o mayuscula

    console.log(person);
    if(person){
        alert(`El nombre es correcto : ${person.nombre}`)

    }else{
        alert('intente nuevamente')
    }
} 