import React, { useContext, useState } from "react";
import { VerProductosModal } from "../modals/VerProductosModal";
import { EditarVentaModal } from "../modals/EditarVentaModal";
import { GlobalContext } from "./GlobalContext";
import Venta from "../class/Venta";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function Ventas() {
  const { meseros, productos, ventas, setVentas } = useContext(GlobalContext);
  const [ventaActual, setVentaActual] = useState(null);

  const agregarVenta = () => {
    let idVenta = ventas.length ? ventas[ventas.length - 1].getId + 1 : 1;
    let idMesero = document.getElementById("nombreMesero").value;
    let meseroSeleccionado = meseros.find(
      (mesero) => mesero.getRut === idMesero
    );
    let idProducto = parseInt(document.getElementById("nombreProducto").value);
    let productoSeleccionado = productos.find(
      (producto) => producto.getId === idProducto
    );
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let fecha = document.getElementById("fecha").value;

    const nuevaVenta = new Venta(
      idVenta,
      meseroSeleccionado,
      productoSeleccionado,
      cantidad,
      fecha
    );
    if (idMesero === "" || isNaN(idProducto) || !productoSeleccionado || isNaN(cantidad) || fecha === "") {
      alert("Por favor completa todos los campos correctamente.");
      return; // Evita continuar si algún campo está vacío o incorrecto
    }
    setVentas([...ventas, nuevaVenta]);
    document.getElementById("nombreMesero").value = "";
    document.getElementById("nombreProducto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("fecha").value = "";
  };

  const eliminarVenta = (id) => {
    const nuevasVentas = ventas.filter(venta => venta.getId !== id);
    setVentas(nuevasVentas);
  };

  const iniciarEdicionVenta = (venta) => {
    setVentaActual(venta);
    const modal = new window.bootstrap.Modal(document.getElementById("modalEditarVenta"));
    modal.show();
  };

  const guardarCambiosVenta = (ventaEditada) => {
    const nuevasVentas = ventas.map((venta) =>
      venta.getId === ventaEditada.getId ? ventaEditada : venta
    );
    setVentas(nuevasVentas);
    const modal = window.bootstrap.Modal.getInstance(document.getElementById("modalEditarVenta"));
    modal.hide();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE").format(price);
  };

  return (
    <div>
      <form
        className="container-fluid m-auto mt-5 col-12 col-lg-12 col-xxl-10 needs-validation-ventas"
        noValidate
      >
        <div className="container-fluid m-auto d-flex flex-column justify-content-center text-center">
          <div className="mt-1 mb-3 col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-5 m-auto d-flex flex-wrap shadow rounded border border-info p-3">
            <div className="container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
              <h3>Registro De Ventas</h3>
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
              <label htmlFor="nombreProducto" className="form-label">
                <p className="fw-bold">Seleccionar Producto</p>
              </label>
              <select
                name="nombreProducto"
                id="nombreProducto"
                className="form-select form-select-sm text-center"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un producto
                </option>
                {productos && productos.map((producto) => (
                  <option key={producto.getId} value={producto.getId}>
                    {producto.getNombre} - ${formatPrice(producto.getPrecio)}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                por favor selecciona un producto
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
              <button
                type="button"
                className="mt-3 btn btn-info btn-sm p-2 m-auto fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#verProductos"
              >
                Ver Productos
              </button>
            </div>
            <div className="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
              <label htmlFor="cantidad" className="form-label fw-bold">
                Ingresar cantidad del producto
              </label>
              <input
                type="number"
                className="form-control"
                id="cantidad"
                placeholder="Ingresar cantidad"
                min="1"
                step="1"
                required
              />
              <div className="invalid-feedback">
                por favor ingresa una cantidad
              </div>
            </div>
            <div className="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
              <label htmlFor="nombreMesero" className="form-label">
                <p className="fw-bold">Seleccionar Mesero</p>
              </label>
              <select
                name="nombreMesero"
                id="nombreMesero"
                className="form-select form-select-sm text-center"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona un mesero
                </option>
                {meseros && meseros.map((mesero) => (
                  <option key={mesero.getRut} value={mesero.getRut}>
                    {mesero.getNombre}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                por favor selecciona un mesero
              </div>
            </div>
            <div className="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
              <label htmlFor="fecha" className="form-label">
                <p className="fw-bold">Seleccionar Fecha</p>
              </label>
              <input
                type="date"
                name="fecha"
                id="fecha"
                className="form-control text-center"
                required
              />
              <div className="invalid-feedback">
                por favor selecciona una fecha
              </div>
            </div>
            <div className="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 text-center m-auto">
              <button
                type="button"
                className="btn btn-info fw-bold"
                id="ingresarVentaButton"
                onClick={agregarVenta}
              >
                Ingresar venta al sistema
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-5 container-fluid m-auto text-center fw-bold col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
        <h3>Ventas Registradas en el Sistema</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label
            htmlFor="buscarVentas"
            className="form-label justify-content-start"
          >
            Buscar venta por ID
          </label>
          <input
            type="text"
            id="buscarVentas"
            className="form-control"
            placeholder="Buscar venta por ID..."
          />
        </div>
        <table
          className="container table table-striped table-bordered border-info text-center"
          id="tablaVentas"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Mesero</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Fecha</th>
              <th>Total</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {ventas && ventas.map((venta) => (
              <tr key={venta.getId}>
                <td>{venta.getId}</td>
                <td>{venta.getMesero.getNombre}</td>
                <td>{venta.getProducto.getNombre}</td>
                <td>{venta.getCantidad}</td>
                <td>{venta.getFecha}</td>
                <td>{'$'+formatPrice(venta.getCantidad * venta.getProducto.getPrecio)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => iniciarEdicionVenta(venta)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarVenta(venta.getId)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <VerProductosModal />
      <EditarVentaModal venta={ventaActual} onSave={guardarCambiosVenta} />
    </div>
  );
}
