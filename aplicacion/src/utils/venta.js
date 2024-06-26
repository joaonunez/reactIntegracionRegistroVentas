import { productos } from './producto';
import { meseros } from './mesero';
import Swal from 'sweetalert2';
import $ from 'jquery';
import { validarFormularioModal } from './validacion';
import { useEffect } from 'react';

class Venta {
    constructor(id, mesero, producto, cantidad, fecha) {
        this._id = id;
        this._mesero = mesero;
        this._producto = producto;
        this._cantidad = cantidad;
        this._fecha = fecha;
    }

    get getId() {
        return this._id;
    }
    get getMesero() {
        return this._mesero;
    }
    get getProducto() {
        return this._producto;
    }
    get getCantidad() {
        return this._cantidad;
    }
    get getFecha() {
        return this._fecha;
    }

    set setMesero(mesero) {
        this._mesero = mesero;
    }
    set setProducto(producto) {
        this._producto = producto;
    }
    set setCantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set setFecha(fecha) {
        this._fecha = fecha;
    }
}

let ventas = [];

function validarYIngresarVenta() {
    const form = document.querySelector('.needs-validation-ventas');
    const cantidad = document.getElementById('cantidad').value;
    if (form.checkValidity() && cantidad > 0) {
        ingresarVenta();
        form.reset();
        form.classList.remove('was-validated');
        Swal.fire('Venta ingresada satisfactoriamente', '', 'success');
    } else {
        form.classList.add('was-validated');
        if (cantidad <= 0) {
            document.getElementById('cantidad').setCustomValidity('La cantidad debe ser mayor que cero.');
        } else {
            document.getElementById('cantidad').setCustomValidity('');
        }
    }
}

let ventaIdCounter = 1;

function ingresarVenta() {
    let productoId = document.getElementById('nombreProducto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let meseroRut = document.getElementById('nombreMesero').value;
    let fecha = document.getElementById('fecha').value;
    let productoSeleccionado = productos.find(producto => producto.getId == productoId);
    let meseroSeleccionado = meseros.find(mesero => mesero.getRut == meseroRut);

    if (productoSeleccionado && meseroSeleccionado) {
        let venta = new Venta(
            ventaIdCounter,
            meseroSeleccionado,
            productoSeleccionado,
            cantidad,
            fecha
        );

        ventas.push(venta);
        ventaIdCounter++;
        mostrarVentas();
    } else {
        console.error('Error: Mesero o producto no encontrado');
    }
}

function mostrarVentas() {
    useEffect(() => {
        let tbody = document.getElementById('tablaVentas').getElementsByTagName('tbody')[0];
        if (tbody) {
            tbody.innerHTML = '';
            ventas.forEach((venta, index) => {
                let row = tbody.insertRow();
                row.insertCell(0).innerText = venta.getId;
                row.insertCell(1).innerText = venta.getMesero.getNombre;
                row.insertCell(2).innerText = venta.getProducto.getNombre;
                row.insertCell(3).innerText = venta.getCantidad;
                row.insertCell(4).innerText = venta.getFecha;
                row.insertCell(5).innerText = `$${venta.getProducto.getPrecio * venta.getCantidad}`;
                
                let editCell = row.insertCell(6);
                let editButton = document.createElement('button');
                editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>';
                editButton.className = 'btn btn-primary';
                editButton.setAttribute('data-bs-toggle', 'modal');
                editButton.setAttribute('data-bs-target', '#modalEditarVenta');
                editButton.onclick = function () {
                    abrirModalEditarVenta(index);
                };
                editCell.appendChild(editButton);

                let deleteCell = row.insertCell(7);
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
                deleteButton.className = 'btn btn-danger';
                deleteButton.onclick = function () {
                    eliminarVenta(index);
                };
                deleteCell.appendChild(deleteButton);
            });
        }
    }, []);
}

function abrirModalEditarVenta(index) {
    let venta = ventas[index];
    document.getElementById('editarProductoVenta').value = venta.getProducto.getId;
    document.getElementById('editarCantidadVenta').value = venta.getCantidad;
    document.getElementById('editarMeseroVenta').value = venta.getMesero.getRut;
    document.getElementById('editarFechaVenta').value = venta.getFecha;
    document.getElementById('formEditarVenta').onsubmit = function(event) {
        event.preventDefault();
        if (validarFormularioModal('formEditarVenta')) {
            editarVenta(index);
            $('#modalEditarVenta').modal('hide');
            Swal.fire('Venta modificada satisfactoriamente', '', 'success');
        }
    };
    $('#modalEditarVenta').modal('show');
}

function validarFormularioModal(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    });
    return isValid;
}

function editarVenta(index) {
    let venta = ventas[index];
    let newProductoId = document.getElementById('editarProductoVenta').value;
    let newProducto = productos.find(producto => producto.getId == newProductoId);
    let newCantidad = document.getElementById('editarCantidadVenta').value;
    let newMeseroRut = document.getElementById('editarMeseroVenta').value;
    let newMesero = meseros.find(mesero => mesero.getRut == newMeseroRut);
    let newFecha = document.getElementById('editarFechaVenta').value;
    
    venta.setProducto = newProducto;
    venta.setCantidad = parseInt(newCantidad);
    venta.setMesero = newMesero;
    venta.setFecha = newFecha;
    
    mostrarVentas();
}

function eliminarVenta(index) {
    ventas.splice(index, 1);
    mostrarVentas();
    Swal.fire('Venta eliminada satisfactoriamente', '', 'success');
}

useEffect(() => {
    document.getElementById('ingresarVentaButton')?.addEventListener('click', validarYIngresarVenta);
    mostrarVentas();
}, []);

export { Venta, ventas, mostrarVentas, validarYIngresarVenta, ingresarVenta, editarVenta, eliminarVenta, abrirModalEditarVenta };
