class Producto {
    constructor(id, nombre, categoria, precio) {
        this._id = id;
        this._nombre = nombre;
        this._categoria = categoria;
        this._precio = precio;
    }

    get getId() {
        return this._id;
    }
    get getNombre() {
        return this._nombre;
    }
    get getCategoria() {
        return this._categoria;
    }
    get getPrecio() {
        return this._precio;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }
    set setCategoria(categoria) {
        this._categoria = categoria;
    }
    set setPrecio(precio) {
        this._precio = precio;
    }
}



export default Producto;