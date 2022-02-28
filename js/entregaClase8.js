class comprador{
    constructor(nombre, apellido,){
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
   
    }
    hablarSaludo(){
        if(nombre, apellido){
            console.log(`Usuario registrado ${this.nombre} ${this.apellido}`);
            alert(`Usuario registrado \n ${this.nombre} ${this.apellido}`)
        }
        else{
            alert("Usuario NO registrado")
        }
    
    }
    
};   

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
// const edad = prompt("Cual es su edad?")
// const pais = prompt("De que pais es?")

const usuario2 = new comprador(nombre, apellido)
usuario2.hablarSaludo()
alert(`Gracias por suscribirte ${nombre.toUpperCase()} ${apellido.toUpperCase()}`)


class personaRegistrada{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido= apellido;
    }
  
}
const listaRegistrados = [];
const nuevoRegistro = new personaRegistrada(usuario2.nombre , usuario2.apellido)
listaRegistrados.push(nuevoRegistro);
console.log(listaRegistrados);


//RELACIONADO CON EL REGISTRO DE LAS PERSONAS A LA PAGINA
const addPerson =() =>{
    class personaRegistrada{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido= apellido;
        }
        
    }
    const nuevoRegistro2 = new personaRegistrada(nombre,apellido)
    nuevoRegistro2.nombre = prompt("Ingrese su nombre")
    nuevoRegistro2.apellido = prompt("Ingrese su apellido")
    listaRegistrados.push(nuevoRegistro2.nombre, nuevoRegistro2.apellido)
    // console.log(listaRegistrados.join("\n"));
    console.log(listaRegistrados.concat(nuevoRegistro2))
    const miniContenedor = document.createElement('div')
    miniContenedor.innerHTML = `<h3>Nombre :  ${nuevoRegistro2.nombre}</h3>
    <h3>Apellido : ${nuevoRegistro2.apellido}</h3>`
    document.body.appendChild(miniContenedor)
    
}

for (const persona of listaRegistrados) {
     let contenedor = document.createElement("div")
     contenedor.innerHTML=`<h2>Lista de personas registradas recientemente</h2>
                                 <h3>Nombre : ${persona.nombre}</h3
                                 <h3>Apellido : ${persona.apellido}</h3>`

     document.body.appendChild(contenedor);



 }
