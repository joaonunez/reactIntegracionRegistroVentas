import React from "react";
export function EditarProductoModal() {
  return (
    <div
      class="modal fade"
      id="modalEditarProducto"
      tabindex="-1"
      aria-labelledby="modalEditarProductoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalEditarProductoLabel">
              Editar Producto
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
              id="formEditarProducto"
              class="needs-validation-productos"
              novalidate
            >
              <div class="mb-3">
                <label for="editarNombreProducto" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="editarNombreProducto"
                  required
                />
                <div class="invalid-feedback">
                  por favor ingresa un nombre de producto
                </div>
              </div>
              <div class="mb-3">
                <label for="editarCategoriaProducto" class="form-label">
                  Categoría
                </label>
                <select
                  class="form-control"
                  id="editarCategoriaProducto"
                  required
                >
                  <option value="" disabled selected>
                    Selecciona una categoría
                  </option>
                </select>
                <div class="invalid-feedback">
                  por favor selecciona una categoria de producto
                </div>
              </div>
              <div class="mb-3">
                <label for="editarPrecioProducto" class="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="editarPrecioProducto"
                  min="1"
                  required
                />
                <div class="invalid-feedback">
                  por favor ingresa un precio valido
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
