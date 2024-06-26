import React, { useEffect } from 'react';
import { VerProductosModal } from '../modals/VerProductosModal';
import { EditarVentaModal } from '../modals/EditarVentaModal';
import { validarYIngresarVenta, mostrarVentas } from '../utils/venta';

export function Ventas() {
  useEffect(() => {
    document.getElementById('ingresarVentaButton')?.addEventListener('click', validarYIngresarVenta);
    mostrarVentas();
  }, []);

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
              >
                <option value="" selected disabled>
                  Selecciona un producto
                </option>
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
              <div className="invalid-feedback">por favor ingresa una cantidad</div>
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
              >
                <option value="" selected disabled>
                  Selecciona un mesero
                </option>
              </select>
              <div className="invalid-feedback">por favor selecciona un mesero</div>
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
              <div className="invalid-feedback">por favor selecciona una fecha</div>
            </div>
            <div className="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 text-center m-auto">
              <input
                type="submit"
                className="btn btn-info fw-bold"
                id="ingresarVentaButton"
                value="Ingresar venta al sistema"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="mt-5 container-fluid m-auto text-center fw-bold col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
        <h3>Ventas Registradas en el Sistema</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label htmlFor="buscarVentas" className="form-label justify-content-start">
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
          <tbody></tbody>
        </table>
      </div>
      <VerProductosModal />
      <EditarVentaModal />
    </div>
  );
}
