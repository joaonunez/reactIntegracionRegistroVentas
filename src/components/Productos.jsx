import React, { useContext, useState } from "react";
import { EditarProductoModal } from "../modals/EditarProductoModal";
import { GlobalContext } from "./GlobalContext";
import Producto from "../class/Producto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export function Productos() {
  const { productos, setProductos, categorias } = useContext(GlobalContext);
  const [productoActual, setProductoActual] = useState(null);

  const agregarProducto = () => {
    let nombre = document.getElementById("nuevoNombreProducto").value;
    let categoriaId = parseInt(
      document.getElementById("nuevaCategoriaProducto").value
    );
    let categoriaSeleccionada = categorias.find(
      (cat) => cat.getId === categoriaId
    );
    let precio = parseInt(document.getElementById("nuevoPrecioProducto").value);
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1;

    // Validaciones
    if (
      nombre === "" ||
      isNaN(categoriaId) ||
      !categoriaSeleccionada ||
      isNaN(precio) ||
      precio <= 0
    ) {
      alert("Por favor completa todos los campos correctamente.");
      return; // Evita continuar si algún campo está vacío o incorrecto
    }

    const nuevoProducto = new Producto(
      id,
      nombre,
      categoriaSeleccionada,
      precio
    );
    setProductos([...productos, nuevoProducto]);
    document.getElementById("nuevoNombreProducto").value = "";
    document.getElementById("nuevaCategoriaProducto").value = "";
    document.getElementById("nuevoPrecioProducto").value = "";
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(
      (producto) => producto.getId !== id
    );
    setProductos(nuevosProductos);
  };

  const iniciarEdicionProducto = (producto) => {
    setProductoActual(producto);
    const modal = new window.bootstrap.Modal(
      document.getElementById("modalEditarProducto")
    );
    modal.show();
  };

  const guardarCambiosProducto = (productoEditado) => {
    const nuevosProductos = productos.map((producto) =>
      producto.getId === productoEditado.getId ? productoEditado : producto
    );
    setProductos(nuevosProductos);
    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById("modalEditarProducto")
    );
    modal.hide();
  };

  const handlePrecioChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < 0) {
      e.target.value = 1; // Prevenir valores negativos
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE").format(price);
  };

  return (
    <div>
      <div className="mt-5 container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-8 mt-1 mb-5">
        <h3>Productos</h3>
      </div>
      <div className="miTabla mb-5 col-12 m-auto container">
        <div className="mb-3 col-xxl-3 col-10">
          <label
            htmlFor="buscarProductos"
            className="form-label justify-content-start"
          >
            Buscar producto por ID
          </label>
          <input
            type="text"
            id="buscarProductos"
            className="form-control"
            placeholder="Buscar producto por ID..."
          />
        </div>
        <table
          className="container table table-striped table-bordered border-info text-center"
          id="tablaProductos2"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CATEGORÍA</th>
              <th>PRECIO</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.getId}>
                <td>{producto.getId}</td>
                <td>{producto.getNombre}</td>
                <td>{producto.getCategoria.getNombre}</td>
                <td>${formatPrice(producto.getPrecio)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => iniciarEdicionProducto(producto)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarProducto(producto.getId)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-4 shadow rounded border border-info p-3">
        <form className="needs-validation-productos" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Producto</legend>
            <div className="mb-3">
              <label htmlFor="nuevoNombreProducto" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoNombreProducto"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un nombre de producto
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nuevaCategoriaProducto" className="form-label">
                Categoría
              </label>
              <select
                className="form-control"
                id="nuevaCategoriaProducto"
                required
              >
                <option value="" disabled selected>
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
              <label htmlFor="nuevoPrecioProducto" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                id="nuevoPrecioProducto"
                min="1"
                onChange={handlePrecioChange}
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un precio válido
              </div>
            </div>
            <button
              type="button"
              className="btn btn-info"
              id="agregarProductoButton"
              onClick={agregarProducto}
            >
              Agregar Producto
            </button>
          </fieldset>
        </form>
      </div>
      <EditarProductoModal
        producto={productoActual}
        onSave={guardarCambiosProducto}
      />
    </div>
  );
}
