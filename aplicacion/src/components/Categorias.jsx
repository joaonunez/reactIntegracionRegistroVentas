import React, { useContext, useState } from "react";
import { EditarCategoriaModal } from "../modals/EditarCategoriaModal";
import { GlobalContext } from "./GlobalContext";
import Categoria from "../class/Categoria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export function Categorias() {
  const { categorias, setCategorias } = useContext(GlobalContext);
  const [categoriaActual, setCategoriaActual] = useState(null);

  const agregarCategoria = () => {
    let nombre = document.getElementById("nuevoNombreCategoria").value;
    let id = categorias.length ? categorias[categorias.length - 1].getId + 1 : 1;
    if (nombre === "") {
      alert("Por favor ingresa un nombre de categoría válido.");
      return;
    }
    const nuevaCategoria = new Categoria(id, nombre);
    setCategorias([...categorias, nuevaCategoria]);
    document.getElementById("nuevoNombreCategoria").value = "";
  };

  const eliminarCategoria = (id) => {
    const nuevasCategorias = categorias.filter(categoria => categoria.getId !== id);
    setCategorias(nuevasCategorias);
  };

  const iniciarEdicionCategoria = (categoria) => {
    setCategoriaActual(categoria);
    const modal = new window.bootstrap.Modal(document.getElementById("modalEditarCategoria"));
    modal.show();
  };

  const guardarCambiosCategoria = (categoriaEditada) => {
    const nuevasCategorias = categorias.map(categoria => categoria.getId === categoriaEditada.getId ? categoriaEditada : categoria);
    setCategorias(nuevasCategorias);
    const modal = window.bootstrap.Modal.getInstance(document.getElementById("modalEditarCategoria"));
    modal.hide();
  };

  return (
    <div>
      <div className="container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-5 mb-5">
        <h3>Categorías</h3>
      </div>
      <div className="miTabla mb-5 col-12 col-xxl-6 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label htmlFor="buscarCategorias" className="form-label justify-content-start">Buscar categoría por ID</label>
          <input type="text" id="buscarCategorias" className="form-control" placeholder="Buscar categoría por ID..." />
        </div>
        <table className="container table table-striped table-bordered border-info text-center" id="tablaCategorias">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map(categoria => (
              <tr key={categoria.getId}>
                <td>{categoria.getId}</td>
                <td>{categoria.getNombre}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => iniciarEdicionCategoria(categoria)}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => eliminarCategoria(categoria.getId)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container-fluid m-auto mt-5 col-12 col-xl-3 shadow rounded border border-info p-3 mb-5">
        <form className="needs-validation-categorias" noValidate>
          <fieldset className="d-flex flex-column justify-content-center text-center">
            <legend className="fw-bold">Agregar Categoría</legend>
            <div className="mb-3">
              <label htmlFor="nuevoNombreCategoria" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nuevoNombreCategoria" required />
              <div className="invalid-feedback">Por favor ingresa un nombre de categoría</div>
            </div>
            <button type="button" className="btn btn-info col-xl-5 m-auto text-center" id="agregarCategoriaButton" onClick={agregarCategoria}>
              Agregar Categoría
            </button>
          </fieldset>
        </form>
      </div>
      <EditarCategoriaModal categoria={categoriaActual} onSave={guardarCambiosCategoria} />
    </div>
  );
}
