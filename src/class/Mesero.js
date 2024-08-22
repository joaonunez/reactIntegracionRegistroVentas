class Mesero {
    constructor(rut, nombre) {
      this._rut = rut;
      this._nombre = nombre;
    }
  
    get getRut() {
      return this._rut;
    }
  
    get getNombre() {
      return this._nombre;
    }
  
    set setRut(rut) {
      this._rut = rut;
    }
  
    set setNombre(nombre) {
      this._nombre = nombre;
    }
  }
  
  export default Mesero;
  