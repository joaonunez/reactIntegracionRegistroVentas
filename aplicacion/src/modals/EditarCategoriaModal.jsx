import React from "react";
import ReactDOM from "react-dom";
export function EditarCategoriaModal() {
  return (
    <div
      class="modal fade"
      id="modalEditarCategoria"
      tabindex="-1"
      aria-labelledby="modalEditarCategoriaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalEditarCategoriaLabel">
              Editar Categoría
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
              id="formEditarCategoria"
              class="needs-validation-categorias"
              novalidate
            >
              <div class="mb-3">
                <label for="editarNombreCategoria" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="editarNombreCategoria"
                  required
                />
                <div class="invalid-feedback">
                  por favor ingresa un nombre de categoria
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
