import React from "react";
import ReactDOM from "react-dom";
export function EditarMeseroModal() {
  return (
    <div
      class="modal fade"
      id="modalEditarMesero"
      tabindex="-1"
      aria-labelledby="modalEditarMeseroLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalEditarMeseroLabel">
              Editar Mesero
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
              id="formEditarMesero"
              class="needs-validation-meseros"
              novalidate
            >
              <div class="mb-3">
                <label for="editarRutMesero" class="form-label">
                  RUT
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="editarRutMesero"
                  required
                />
                <div class="invalid-feedback">
                  por favor ingresa un rut valido
                </div>
              </div>
              <div class="mb-3">
                <label for="editarNombreMesero" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="editarNombreMesero"
                  required
                />
                <div class="invalid-feedback">por favor ingresa un nombre</div>
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
