import React, { useState, useEffect, useContext } from "react";
import Producto from "../class/Producto"; // Importar la clase Producto
import { GlobalContext } from "../components/GlobalContext"; // Importar el contexto global

export function EditarProductoModal({ producto, onSave }) {
  const { categorias } = useContext(GlobalContext); // Obtener categorías del contexto
  const [nombre, setNombre] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.getNombre);
      setCategoriaId(producto.getCategoria.getId);
      setPrecio(producto.getPrecio);
    }
  }, [producto]);

  const handlePrecioChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value < 0) {
      e.target.value = 1; // Prevenir valores negativos
    }
    setPrecio(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoriaSeleccionada = categorias.find(
      (cat) => cat.getId === parseInt(categoriaId)
    );
    if (
      nombre.trim() === "" ||
      isNaN(categoriaId) ||
      !categoriaSeleccionada ||
      isNaN(precio)
    ) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }
    const productoEditado = new Producto(
      producto.getId,
      nombre,
      categoriaSeleccionada,
      precio
    );
    onSave(productoEditado);
  };

  return (
    <div
      className="modal fade"
      id="modalEditarProducto"
      tabIndex="-1"
      aria-labelledby="modalEditarProductoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditarProductoLabel">
              Editar Producto
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
              id="formEditarProducto"
              className="needs-validation-productos"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="editarNombreProducto" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editarNombreProducto"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un nombre de producto
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarCategoriaProducto" className="form-label">
                  Categoría
                </label>
                <select
                  className="form-control"
                  id="editarCategoriaProducto"
                  value={categoriaId}
                  onChange={(e) => setCategoriaId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria.getId} value={categoria.getId}>
                      {categoria.getNombre}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Por favor selecciona una categoría de producto
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="editarPrecioProducto" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="editarPrecioProducto"
                  value={precio}
                  onChange={handlePrecioChange}
                  min="1"
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa un precio válido
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
