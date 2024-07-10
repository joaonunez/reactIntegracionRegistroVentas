import React, { useState, useEffect } from "react";
import { EditarProductoModal } from "../modals/EditarProductoModal";
import productosArray from "../scripts/productos/productosPreCargados";
import categoriasArray from "../scripts/categorias/categoriasPreCargadas";
import Producto from "../class/Producto";

export function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosArray);
  }, []);

  const agregarProducto = () => {
    let nombre = document.getElementById('nuevoNombreProducto').value;
    let categoriaId = parseInt(document.getElementById('nuevaCategoriaProducto').value);
    let categoriaSeleccionada = categoriasArray.find(cat => cat.getId === categoriaId);
    let precio = parseInt(document.getElementById('nuevoPrecioProducto').value);
    let id = productos.length ? productos[productos.length - 1].getId + 1 : 1;
    const nuevoProducto = new Producto(id, nombre, categoriaSeleccionada, precio);
    setProductos([...productos, nuevoProducto]);
    console.log([productos])
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.getId !== id);
    setProductos(nuevosProductos);
    console.log([productos])
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
                <td>${producto.getPrecio}</td>
                <td><button className="btn btn-primary">Editar</button></td>
                <td><button className="btn btn-danger" onClick={() => eliminarProducto(producto.getId)}>Eliminar</button></td>
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
                {categoriasArray.map((categoria) => (
                  <option key={categoria.getId} value={categoria.getId}>{categoria.getNombre}</option>
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
      <EditarProductoModal />
    </div>
  );
}
