import React, { useState, useEffect } from "react";
import Mesero from "../class/Mesero"; // Importar la clase Mesero

export function EditarMeseroModal({ mesero, onSave }) {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");

  useEffect(() => {
    if (mesero) {
      setNombre(mesero.getNombre);
      setRut(mesero.getRut);
    }
  }, [mesero]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rut.trim() === "" || nombre.trim() === "") {
      alert("Por favor ingresa un RUT y nombre de mesero válidos.");
      return;
    }
    const meseroEditado = new Mesero(rut, nombre);
    onSave(meseroEditado);
  };

  return (
    <div
      className="modal fade"
      id="modalEditarMesero"
      tabIndex="-1"
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
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editarRutMesero" className="form-label">
                  RUT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarRutMesero"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un rut válido
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarNombreMesero" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreMesero"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un nombre
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
