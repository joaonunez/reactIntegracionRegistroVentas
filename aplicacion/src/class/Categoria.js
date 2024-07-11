class Categoria {
    constructor(id, nombre) {
      this._id = id;
      this._nombre = nombre;
    }
  
    get getId() {
      return this._id;
    }
  
    get getNombre() {
      return this._nombre;
    }
  
    set setId(id) {
      this._id = id;
    }
  
    set setNombre(nombre) {
      this._nombre = nombre;
    }
  }
  
  export default Categoria;
  