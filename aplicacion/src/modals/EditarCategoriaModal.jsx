import React from "react";

export function EditarCategoriaModal() {
  return (
    <div
      className="modal fade"
      id="modalEditarCategoria"
      tabIndex="-1"
      aria-labelledby="modalEditarCategoriaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarCategoriaLabel">
              Editar Categoría
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
              id="formEditarCategoria"
              className="needs-validation-categorias"
              noValidate
            >
              <div className="mb-3">
                <label htmlFor="editarNombreCategoria" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreCategoria"
                  required
                />
                <div className="invalid-feedback">
                  por favor ingresa un nombre de categoria
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
