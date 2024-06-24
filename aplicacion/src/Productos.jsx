import React from "react";
import ReactDOM from "react-dom";

export function Productos(){
    return(
        <div class="tab-pane fade" id="productos" role="tabpanel" aria-labelledby="productos-tab">
                <div class="mt-5 container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
                    <h3>Productos</h3>
                </div>
                <div class="mb-3 col-xxl-3 col-10">
                    <label for="buscarProductos" class="form-label justify-content-start">Buscar producto por ID</label>
                    <input type="text" id="buscarProductos" class="form-control" placeholder="Buscar producto por ID..." /> 
                </div>
                <div class="miTabla mb-5 col-12 m-auto">
                    <table class="container table table-striped table-bordered border-info text-center" id="tablaProductos2">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>CATEGORIA</th>
                                <th>PRECIO</th>
                                <th colspan="2">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3">
                    <form class="needs-validation-productos" novalidate>
                        <fieldset class="d-flex flex-column justify-content-center text-center">
                            <legend class="fw-bold">Agregar Producto</legend>
                            <div class="mb-3">
                                <label for="nuevoNombreProducto" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nuevoNombreProducto" required />
                                <div class="invalid-feedback">
                                    por favor ingresa un nombre de producto
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="nuevaCategoriaProducto" class="form-label">Categoría</label>
                                <select class="form-control" id="nuevaCategoriaProducto" required>
                                    <option value="" disabled selected>Selecciona una categoría</option>
                                </select>
                                <div class="invalid-feedback">
                                    por favor selecciona una categoría de producto
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="nuevoPrecioProducto" class="form-label">Precio</label>
                                <input type="number" class="form-control" id="nuevoPrecioProducto" min="1" required />
                                <div class="invalid-feedback">
                                    por favor ingresa un precio valido
                                </div>
                            </div>
                            <button type="submit" class="btn btn-info" id="agregarProductoButton" onclick="validarYAgregarProducto()">Agregar Producto</button>
                        </fieldset>
                    </form>
                </div>
            </div>
    );
}