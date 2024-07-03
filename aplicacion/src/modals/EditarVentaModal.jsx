import React from "react";
import ReactDOM from "react-dom";
export function EditarVentaModal() {
  return (
    <div
      className="modal fade"
      id="modalEditarVenta"
      tabIndex="-1"
      aria-labelledby="modalEditarVentaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarVentaLabel">
              Editar Venta
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="formEditarVenta"
              className="needs-validation-ventas"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="editarProductoVenta" className="form-label">
                  Producto
                </label>
                <select
                  id="editarProductoVenta"
                  className="form-select"
                  required
                ></select>
                <div className="invalid-feedback">
                  por favor selecciona un producto
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarCantidadVenta" className="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  id="editarCantidadVenta"
                  className="form-control"
                  min="1"
                  required
                />
                <div className="invalid-feedback">
                  por favor ingresa una cantidad
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarMeseroVenta" className="form-label">
                  Mesero
                </label>
                <select
                  id="editarMeseroVenta"
                  className="form-select"
                  required
                ></select>
                <div className="invalid-feedback">
                  por favor selecciona un mesero
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarFechaVenta" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  id="editarFechaVenta"
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">
                  por favor selecciona una fecha
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
