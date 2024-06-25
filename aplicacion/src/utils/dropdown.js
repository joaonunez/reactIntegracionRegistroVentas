import { productos } from './producto';
import { meseros } from './mesero';
import { actualizarDropdownCategorias } from './categoria';

export function actualizarDropdownProductos() {
    const comboBox1 = document.getElementById('nombreProducto');
    comboBox1.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBox1.appendChild(optionElement);
    });

    const comboBoxEditar = document.getElementById('editarProductoVenta');
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un producto</option>';
    productos.forEach(producto => {
        const optionElement = document.createElement('option');
        optionElement.textContent = `${producto.getNombre} ($${producto.getPrecio} CLP)`;
        optionElement.value = producto.getId;
        comboBoxEditar.appendChild(optionElement);
    });
}

export function actualizarDropdownMeseros() {
    const comboBox3 = document.getElementById('nombreMesero');
    comboBox3.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>';
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBox3.appendChild(optionElement);
    });

    const comboBoxEditar = document.getElementById('editarMeseroVenta');
    comboBoxEditar.innerHTML = '<option value="" selected disabled>Selecciona un mesero</option>';
    meseros.forEach(mesero => {
        const optionElement = document.createElement('option');
        optionElement.textContent = mesero.getNombre;
        optionElement.value = mesero.getRut;
        comboBoxEditar.appendChild(optionElement);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    actualizarDropdownProductos();
    actualizarDropdownCategorias();
    actualizarDropdownMeseros();
});
