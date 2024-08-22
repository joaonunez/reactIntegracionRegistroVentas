import React, { useContext, useState } from "react";
import { EditarMeseroModal } from "../modals/EditarMeseroModal";
import { GlobalContext } from "./GlobalContext";
import Mesero from "../class/Mesero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
export function Meseros() {
  const { meseros, setMeseros } = useContext(GlobalContext);
  const [meseroActual, setMeseroActual] = useState(null);

  const agregarMesero = () => {
    let nombre = document.getElementById("nuevoNombreMesero").value;
    let rut = document.getElementById("nuevoRutMesero").value;
    const nuevoMesero = new Mesero(rut, nombre);
    if (rut === "" || nombre === "") {
      alert("Por favor ingresa un RUT y nombre de mesero válidos.");
      return;
    }
    setMeseros([...meseros, nuevoMesero]);
    document.getElementById("nuevoNombreMesero").value = "";
    document.getElementById("nuevoRutMesero").value = "";
  };

  const eliminarMesero = (rut) => {
    const nuevosMeseros = meseros.filter((mesero) => mesero.getRut !== rut);
    setMeseros(nuevosMeseros);
  };

  const iniciarEdicionMesero = (mesero) => {
    setMeseroActual(mesero);
    const modal = new window.bootstrap.Modal(
      document.getElementById("modalEditarMesero")
    );
    modal.show();
  };

  const guardarCambiosMesero = (meseroEditado) => {
    const nuevosMeseros = meseros.map((mesero) =>
      mesero.getRut === meseroEditado.getRut ? meseroEditado : mesero
    );
    setMeseros(nuevosMeseros);
    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById("modalEditarMesero")
    );
    modal.hide();
  };

  return (
    <div>
      <div className="container-fluid m-auto text-center fw-bold rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-1 mb-5">
        <h3>Meseros</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label
            htmlFor="buscarMeseros"
            className="form-label justify-content-start"
          >
            Buscar mesero por ID
          </label>
          <input
            type="text"
            id="buscarMeseros"
            className="form-control"
            placeholder="Buscar mesero por ID..."
          />
        </div>
        <table
          className="container table table-striped table-bordered border-info text-center"
          id="tablaMeseros"
        >
          <thead>
            <tr>
              <th>RUT</th>
              <th>NOMBRE</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {meseros.map((mesero) => (
              <tr key={mesero.getRut}>
                <td>{mesero.getRut}</td>
                <td>{mesero.getNombre}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => iniciarEdicionMesero(mesero)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarMesero(mesero.getRut)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3 mb-5">
        <form className="needs-validation-meseros" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Mesero</legend>
            <div className="mb-3">
              <label htmlFor="nuevoRutMesero" className="form-label">
                RUT
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoRutMesero"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un rut válido
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoNombreMesero" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoNombreMesero"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un nombre
              </div>
            </div>
            <button
              type="button"
              className="btn btn-info col-xl-5 m-auto text-center"
              id="agregarMeseroButton"
              onClick={agregarMesero}
            >
              Agregar Mesero
            </button>
          </fieldset>
        </form>
      </div>
      <EditarMeseroModal mesero={meseroActual} onSave={guardarCambiosMesero} />
    </div>
  );
}
