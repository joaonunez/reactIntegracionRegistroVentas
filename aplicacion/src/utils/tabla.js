import { actualizarTablaMeseros } from './mesero';
import { actualizarTablaProductos } from './producto';
import { actualizarTablaCategorias } from './categoria';
import { mostrarVentas } from './venta';

document.addEventListener('DOMContentLoaded', function () {
    actualizarTablaMeseros();
    actualizarTablaProductos();
    actualizarTablaCategorias();
    mostrarVentas();
});
