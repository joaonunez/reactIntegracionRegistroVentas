import React, { useState, useEffect } from "react";
import meserosArray from "../scripts/meseros/meserosPreCargados";
import productosArray from "../scripts/productos/productosPreCargados";
import Venta from "../class/Venta";

export function EditarVentaModal({ venta, onSave }) {
  const [productoId, setProductoId] = useState("");
  const [meseroId, setMeseroId] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (venta) {
      setProductoId(venta.getProducto.getId);
      setMeseroId(venta.getMesero.getRut);
      setCantidad(venta.getCantidad);
      setFecha(venta.getFecha);
    }
  }, [venta]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const meseroSeleccionado = meserosArray.find((mesero) => mesero.getRut === meseroId);
    const productoSeleccionado = productosArray.find((producto) => producto.getId === parseInt(productoId));
    if (!meseroSeleccionado || !productoSeleccionado || isNaN(cantidad) || fecha.trim() === "") {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }
    const ventaEditada = new Venta(
      venta.getId,
      meseroSeleccionado,
      productoSeleccionado,
      cantidad,
      fecha
    );
    onSave(ventaEditada);
  };

  return (
    <div
      className="modal fade"
      id="modalEditarVenta"
      tabIndex="-1"
      aria-labelledby="modalEditarVentaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarVentaLabel">
              Editar Venta
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
              id="formEditarVenta"
              className="needs-validation-ventas"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editarProductoVenta" className="form-label">
                  Producto
                </label>
                <select
                  id="editarProductoVenta"
                  className="form-select"
                  value={productoId}
                  onChange={(e) => setProductoId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecciona un producto
                  </option>
                  {productosArray.map((producto) => (
                    <option key={producto.getId} value={producto.getId}>
                      {producto.getNombre} - ${producto.getPrecio}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Por favor selecciona un producto
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarCantidadVenta" className="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  id="editarCantidadVenta"
                  className="form-control"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  min="1"
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa una cantidad
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarMeseroVenta" className="form-label">
                  Mesero
                </label>
                <select
                  id="editarMeseroVenta"
                  className="form-select"
                  value={meseroId}
                  onChange={(e) => setMeseroId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecciona un mesero
                  </option>
                  {meserosArray.map((mesero) => (
                    <option key={mesero.getRut} value={mesero.getRut}>
                      {mesero.getNombre}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Por favor selecciona un mesero
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarFechaVenta" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  id="editarFechaVenta"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor selecciona una fecha
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
