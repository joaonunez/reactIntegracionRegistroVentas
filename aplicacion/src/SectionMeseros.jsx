import React from "react";
import ReactDOM from "react-dom";
export function Meseros(){
    return(
        <div class="tab-pane fade" id="meseros" role="tabpanel" aria-labelledby="meseros-tab">
                <div class="container-fluid m-auto text-center fw-bold rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-1 mb-5">
                    <h3>Meseros</h3>
                </div>
                <div class="mb-3 col-10 col-xxl-3">
                    <label for="buscarMeseros" class="form-label justify-content-start">Buscar mesero por ID</label>
                    <input type="text" id="buscarMeseros" class="form-control" placeholder="Buscar mesero por ID..." />
                </div>
                <div class="miTabla mb-5 col-12 m-auto">
                    <table class="container table table-striped table-bordered border-info text-center" id="tablaMeseros">
                        <thead>
                            <tr>
                                <th>RUT</th>
                                <th>NOMBRE</th>
                                <th colspan="2">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3 mb-5">
                    <form class="needs-validation-meseros" novalidate>
                        <fieldset class="d-flex flex-column justify-content-center text-center">
                            <legend class="fw-bold">Agregar Mesero</legend>
                            <div class="mb-3">
                                <label for="nuevoRutMesero" class="form-label">RUT</label>
                                <input type="text" class="form-control" id="nuevoRutMesero" required />
                                <div class="invalid-feedback">
                                    por favor ingresa un rut valido
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="nuevoNombreMesero" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nuevoNombreMesero" required />
                                <div class="invalid-feedback">
                                    por favor ingresa un nombre
                                </div>
                            </div>
                            <button type="submit" class="btn btn-info" id="agregarMeseroButton" onclick="validarYAgregarMesero()">Agregar Mesero</button>
                        </fieldset>
                    </form>
                </div>
            </div>
    );
}