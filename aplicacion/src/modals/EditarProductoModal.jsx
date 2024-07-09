import React from "react";

export function EditarProductoModal() {
  return (
    <div
      className="modal fade"
      id="modalEditarProducto"
      tabindex="-1"
      aria-labelledby="modalEditarProductoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarProductoLabel">
              Editar Producto
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
              id="formEditarProducto"
              className="needs-validation-productos"
              novalidate
            >
              <div className="mb-3">
                <label for="editarNombreProducto" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreProducto"
                  required
                />
                <div className="invalid-feedback">
                  por favor ingresa un nombre de producto
                </div>
              </div>
              <div className="mb-3">
                <label for="editarCategoriaProducto" className="form-label">
                  Categoría
                </label>
                <select
                  className="form-control"
                  id="editarCategoriaProducto"
                  required
                >
                  <option value="" disabled selected>
                    Selecciona una categoría
                  </option>
                </select>
                <div className="invalid-feedback">
                  por favor selecciona una categoria de producto
                </div>
              </div>
              <div className="mb-3">
                <label for="editarPrecioProducto" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="editarPrecioProducto"
                  min="1"
                  required
                />
                <div className="invalid-feedback">
                  por favor ingresa un precio valido
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
