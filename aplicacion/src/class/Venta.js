import Producto from "./Producto";
class Venta {
    constructor(id, mesero, producto, cantidad, fecha) {
        this._id = id; // inicializa el id de la venta
        this._mesero = mesero; // inicializa el mesero de la venta
        this._producto = producto; // inicializa el producto de la venta
        this._cantidad = cantidad; // inicializa la cantidad de la venta
        this._fecha = fecha; // inicializa la fecha de la venta
    }

    get getId() {
        return this._id; // devuelve el id de la venta
    }
    get getMesero() {
        return this._mesero; // devuelve el mesero de la venta
    }
    get getProducto() {
        return this._producto; // devuelve el producto de la venta
    }
    get getCantidad() {
        return this._cantidad; // devuelve la cantidad de la venta
    }
    get getFecha() {
        return this._fecha; // devuelve la fecha de la venta
    }

    set setMesero(mesero) {
        this._mesero = mesero; // establece el mesero de la venta
    }
    set setProducto(producto) {
        this._producto = producto; // establece el producto de la venta
    }
    set setCantidad(cantidad) {
        this._cantidad = cantidad; // establece la cantidad de la venta
    }
    set setFecha(fecha) {
        this._fecha = fecha; // establece la fecha de la venta
    }
}
export default Venta;