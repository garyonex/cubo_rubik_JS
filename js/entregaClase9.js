

let myFormulario =  
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
class Carrito {
    constructor(clave) {
        this.clave = clave || "productos";
        this.productos = this.obtener();
    }

    agregar(producto) {
        if (!this.existe(producto.id)) {
            this.productos.push(producto);
            this.guardar();
        }
    }

    quitar(id) {
        const indice = this.productos.findIndex(p => p.id === id);
        if (indice != -1) {
            this.productos.splice(indice, 1);
            this.guardar();
        }
    }

    guardar() {
        localStorage.setItem(this.clave, JSON.stringify(this.productos));
    }

    obtener() {
        const productosCodificados = localStorage.getItem(this.clave);
        return JSON.parse(productosCodificados) || [];
    }

    existe(id) {
        return this.productos.find(producto => producto.id === id);
    }

    obtenerConteo() {
        return this.productos.length;
    }


}