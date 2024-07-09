import React from "react";

export function EditarMeseroModal() {
  return (
    <div
      className="modal fade"
      id="modalEditarMesero"
      tabindex="-1"
      aria-labelledby="modalEditarMeseroLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarMeseroLabel">
              Editar Mesero
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
              id="formEditarMesero"
              className="needs-validation-meseros"
              novalidate
            >
              <div className="mb-3">
                <label for="editarRutMesero" className="form-label">
                  RUT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarRutMesero"
                  required
                />
                <div className="invalid-feedback">
                  por favor ingresa un rut valido
                </div>
              </div>
              <div className="mb-3">
                <label for="editarNombreMesero" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreMesero"
                  required
                />
                <div className="invalid-feedback">por favor ingresa un nombre</div>
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
