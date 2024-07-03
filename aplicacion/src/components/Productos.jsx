import React from 'react';
import ReactDOM from "react-dom";
import { EditarProductoModal } from '../modals/EditarProductoModal';


export function Productos() {
  useValidation();

  useEffect(() => {
    document.getElementById('agregarProductoButton').addEventListener('click', validarYAgregarProducto);
    actualizarTablaProductos();
    actualizarDropdownProductos();
  }, []);

  return (
    <div>
      <div className="mt-5 container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
        <h3>Productos</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-xxl-3 col-10">
          <label htmlFor="buscarProductos" className="form-label justify-content-start">Buscar producto por ID</label>
          <input type="text" id="buscarProductos" className="form-control" placeholder="Buscar producto por ID..." />
        </div>
        <table className="container table table-striped table-bordered border-info text-center" id="tablaProductos2">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CATEGORIA</th>
              <th>PRECIO</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3">
        <form className="needs-validation-productos" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Producto</legend>
            <div className="mb-3">
              <label htmlFor="nuevoNombreProducto" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nuevoNombreProducto" required />
              <div className="invalid-feedback">
                por favor ingresa un nombre de producto
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevaCategoriaProducto" className="form-label">Categoría</label>
              <select className="form-control" id="nuevaCategoriaProducto" required>
                <option value="" disabled selected>Selecciona una categoría</option>
                <option value="1">Bebestible</option>
                <option value="2">Comestible</option>
              </select>
              <div className="invalid-feedback">
                por favor selecciona una categoría de producto
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevoPrecioProducto" className="form-label">Precio</label>
              <input type="number" className="form-control" id="nuevoPrecioProducto" min="1" required />
              <div className="invalid-feedback">
                por favor ingresa un precio valido
              </div>
            </div>
            <button type="button" className="btn btn-info" id="agregarProductoButton">Agregar Producto</button>
          </fieldset>
        </form>
      </div>
      <EditarProductoModal />
    </div>
  );
}
