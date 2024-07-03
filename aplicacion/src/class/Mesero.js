class Mesero {
    constructor(rut, nombre) { // constructor para crear un objeto mesero con rut y nombre
        this._rut = rut; // inicializa el rut del mesero
        this._nombre = nombre; // inicializa el nombre del mesero
    }

    get getRut() { // getter para obtener el rut del mesero
        return this._rut;
    }
    get getNombre() { // getter para obtener el nombre del mesero
        return this._nombre;
    }

    set setRut(rut) { // setter para establecer el rut del mesero
        this._rut = rut;
    }
    set setNombre(nombre) { // setter para establecer el nombre del mesero
        this._nombre = nombre;
    }
}

export default Mesero;