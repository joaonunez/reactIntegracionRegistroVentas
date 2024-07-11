import React, { useState, useEffect } from "react";
import Categoria from "../class/Categoria";
export function EditarCategoriaModal({ categoria, onSave }) {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (categoria) {
      setNombre(categoria.getNombre);
    }
  }, [categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      alert("Por favor ingresa un nombre de categoría válido.");
      return;
    }
    const categoriaEditada = new Categoria(categoria.getId, nombre);
    onSave(categoriaEditada);
  };

  return (s
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
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editarNombreCategoria" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreCategoria"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un nombre de categoría
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
