import React from "react";

export function Meseros() {
  return (
    <div>
      <div className="container-fluid m-auto text-center fw-bold rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-1 mb-5">
        <h3>Meseros</h3>
      </div>
      <div className="mb-3 col-10 col-xxl-3">
        <label htmlFor="buscarMeseros" className="form-label justify-content-start">Buscar mesero por ID</label>
        <input type="text" id="buscarMeseros" className="form-control" placeholder="Buscar mesero por ID..." />
      </div>
      <div className="miTabla mb-5 col-12 m-auto">
        <table className="container table table-striped table-bordered border-info text-center" id="tablaMeseros">
          <thead>
            <tr>
              <th>RUT</th>
              <th>NOMBRE</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3 mb-5">
        <form className="needs-validation-meseros" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Mesero</legend>
            <div className="mb-3">
              <label htmlFor="nuevoRutMesero" className="form-label">RUT</label>
              <input type="text" className="form-control" id="nuevoRutMesero" required />
              <div className="invalid-feedback">
                por favor ingresa un rut valido
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoNombreMesero" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nuevoNombreMesero" required />
              <div className="invalid-feedback">
                por favor ingresa un nombre
              </div>
            </div>
            <button type="submit" className="btn btn-info" id="agregarMeseroButton">Agregar Mesero</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}