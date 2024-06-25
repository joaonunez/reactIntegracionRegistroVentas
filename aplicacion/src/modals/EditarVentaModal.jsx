import React from "react";
export function EditarVentaModal() {
  return (
    <div
      class="modal fade"
      id="modalEditarVenta"
      tabindex="-1"
      aria-labelledby="modalEditarVentaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalEditarVentaLabel">
              Editar Venta
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              id="formEditarVenta"
              class="needs-validation-ventas"
              novalidate
            >
              <div class="mb-3">
                <label for="editarProductoVenta" class="form-label">
                  Producto
                </label>
                <select
                  id="editarProductoVenta"
                  class="form-select"
                  required
                ></select>
                <div class="invalid-feedback">
                  por favor selecciona un producto
                </div>
              </div>
              <div class="mb-3">
                <label for="editarCantidadVenta" class="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  id="editarCantidadVenta"
                  class="form-control"
                  min="1"
                  required
                />
                <div class="invalid-feedback">
                  por favor ingresa una cantidad
                </div>
              </div>
              <div class="mb-3">
                <label for="editarMeseroVenta" class="form-label">
                  Mesero
                </label>
                <select
                  id="editarMeseroVenta"
                  class="form-select"
                  required
                ></select>
                <div class="invalid-feedback">
                  por favor selecciona un mesero
                </div>
              </div>
              <div class="mb-3">
                <label for="editarFechaVenta" class="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  id="editarFechaVenta"
                  class="form-control"
                  required
                />
                <div class="invalid-feedback">
                  por favor selecciona una fecha
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
