import React from "react";
import ReactDOM from "react-dom";
import productos from "../scripts/productos/productosPreCargados";
export function VerProductosModal() {
  return (
    <div>
      <div
        class="modal fade modal-lg"
        id="verProductos"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Productos Registrados En El Sistema
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body miTabla">
              <table
                id="tablaProductos"
                class="table table-striped table-bordered container text-center"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>CATEGORIA</th>
                    <th>PRECIO</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => (
                    <tr key={producto.getId}>
                      <td>{producto.getId}</td>
                      <td>{producto.getNombre}</td>
                      <td>{producto.getCategoria.getNombre}</td>
                      <td>${producto.getPrecio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
