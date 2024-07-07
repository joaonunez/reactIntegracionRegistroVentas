import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { EditarCategoriaModal } from "../modals/EditarCategoriaModal";
import categorias from "../scripts/categorias/categoriasPreCargadas";

export function Categorias() {
  return (
    <div>
      <div className="container-fluid m-auto text-center fw-bold shadow rounded col-10 col-sm-8 col-md-6 col-lg-4 col-xl-1 mt-5 mb-5">
        <h3>Categorías</h3>
      </div>
      <div className="miTabla mb-5 col-12 col-xxl-6 m-auto container">
        <div className="mb-3 col-10 col-xxl-3">
          <label
            htmlFor="buscarCategorias"
            className="form-label justify-content-start"
          >
            Buscar categoría por ID
          </label>
          <input
            type="text"
            id="buscarCategorias"
            className="form-control"
            placeholder="Buscar categoría por ID..."
          />
        </div>
        <table
          className="container table table-striped table-bordered border-info text-center "
          id="tablaCategorias"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th colSpan="2">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.getId}>
                <td>{categoria.getId}</td>
                <td>{categoria.getNombre}</td>
                <td><button className="btn btn-primary">Editar</button></td>
                <td><button className="btn btn-danger">Eliminar</button></td>
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
              <label htmlFor="nuevoNombreCategoria" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nuevoNombreCategoria"
                required
              />
              <div className="invalid-feedback">
                Por favor ingresa un nombre de categoria
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info col-xl-5 m-auto text-center"
              id="agregarCategoriaButton"
            >
              Agregar Categoría
            </button>
          </fieldset>
        </form>
      </div>
      <EditarCategoriaModal />
    </div>
  );
}
