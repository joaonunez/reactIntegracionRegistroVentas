class Categoria {
    constructor(id, nombre) {
        this._id = id; // asigna el id pasado al constructor a la propiedad _id
        this._nombre = nombre; // asigna el nombre pasado al constructor a la propiedad _nombre
    }

    get getId() {
        return this._id; // devuelve el id de la categoria
    }
    get getNombre() {
        return this._nombre; // devuelve el nombre de la categoria
    }

    set setNombre(nombre) {
        this._nombre = nombre; // establece el nuevo nombre para la categoria
    }
}
export default Categoria;