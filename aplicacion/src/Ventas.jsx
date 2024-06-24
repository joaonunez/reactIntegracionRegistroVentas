import React from "react";
import ReactDOM from "react-dom";
export function Ventas(){
    return(
        <div>
            <div>
            <div class="tab-pane fade show active" id="ventas" role="tabpanel" aria-labelledby="ventas-tab">
                <form class="container-fluid m-auto mt-5 col-12 col-lg-12 col-xxl-10 needs-validation-ventas" novalidate>
                    <div class="container-fluid m-auto d-flex flex-column justify-content-center text-center">
                        <div class="mt-1 mb-3 col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-5 m-auto d-flex flex-wrap shadow rounded border border-info p-3">
                            <div class="container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
                                <h3>Registro De Ventas</h3>
                            </div>
                            <div class="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
                                <label for="nombreProducto" class="form-label">
                                    <p class="fw-bold">Seleccionar Producto</p>
                                </label>
                                <select name="nombreProducto" id="nombreProducto" class="form-select form-select-sm text-center" required>
                                    <option value="" selected disabled>Selecciona un producto</option>
                                </select>
                                <div class="invalid-feedback">
                                    por favor selecciona un producto
                                </div>
                            </div>
                            <div class="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
                                <button type="button" class="mt-3 btn btn-info btn-sm p-2 m-auto fw-bold" data-bs-toggle="modal"
                                    data-bs-target="#verProductos">Ver Productos</button>
                            </div>
                            <div class="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
                                <label for="cantidad" class="form-label fw-bold">Ingresar cantidad del producto</label>
                                <input type="number" class="form-control" id="cantidad"
                                    placeholder="Ingresar cantidad" min="1" step="1" required />
                                <div class="invalid-feedback">
                                    por favor ingresa una cantidad
                                </div>
                            </div>
                            <div class="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
                                <label for="nombreMesero" class="form-label">
                                    <p class="fw-bold">Seleccionar Mesero</p>
                                </label>
                                <select name="nombreMesero" id="nombreMesero" class="form-select form-select-sm text-center" required>
                                    <option value="" selected disabled>Selecciona un mesero</option>
                                </select>
                                <div class="invalid-feedback">
                                    por favor selecciona un mesero
                                </div>
                            </div>
                            <div class="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7 text-center m-auto">
                                <label for="fecha" class="form-label">
                                    <p class="fw-bold">Seleccionar Fecha</p>
                                </label>
                                <input type="date" name="fecha" id="fecha" class="form-control text-center" required />
                                <div class="invalid-feedback">
                                    por favor selecciona una fecha
                                </div>
                            </div>
                            <div class="mt-5 col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 text-center m-auto">
                                <input type="submit" class="btn btn-info fw-bold" id="ingresarVentaButton" value="Ingresar venta al sistema" onclick="validarYIngresarVenta()" />
                            </div>
                        </div>
                    </div>
                </form>

                <div class="mt-5 container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
                    <h3>Ventas Registradas en el Sistema</h3>
                </div>
                <div class="mb-3 col-10 col-xxl-3">
                    <label for="buscarVentas" class="form-label justify-content-start">Buscar venta por ID</label>
                    <input type="text" id="buscarVentas" class="form-control" placeholder="Buscar venta por ID..." />
                </div>
                <div class="miTabla mb-5 col-12 m-auto">
                    <table class="container table table-striped table-bordered border-info text-center" id="tablaVentas">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Mesero</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Total</th>
                                <th colspan="2">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        
            </div> 
        </div>
    );
}