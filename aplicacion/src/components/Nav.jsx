import React from "react";
import ReactDOM from "react-dom";

export function Nav() {
  return (
    <div>
      <div className="mt-3 m-auto text-center">
        <h1>Gestion Sistema De Negocio</h1>
      </div>
      <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active tab" id="ventas-tab" data-bs-toggle="tab" data-bs-target="#ventas" type="button" role="tab" aria-controls="ventas" aria-selected="true">Gestion De Ventas</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab" id="productos-tab" data-bs-toggle="tab" data-bs-target="#productos" type="button" role="tab" aria-controls="productos" aria-selected="false">Gestion De Productos</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab" id="meseros-tab" data-bs-toggle="tab" data-bs-target="#meseros" type="button" role="tab" aria-controls="meseros" aria-selected="false">Gestion De Meseros</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link tab" id="categorias-tab" data-bs-toggle="tab" data-bs-target="#categorias" type="button" role="tab" aria-controls="categorias" aria-selected="false">Gestion de Categorias</button>
        </li>
      </ul>
      <div className="tab-content text-center" id="myTabContent">
        <div className="tab-pane fade show active" id="ventas" role="tabpanel" aria-labelledby="ventas-tab">
          {/* Contenido del tab de ventas */}
        </div>
        <div className="tab-pane fade" id="productos" role="tabpanel" aria-labelledby="productos-tab">
          {/* Contenido del tab de productos */}
        </div>
        <div className="tab-pane fade" id="meseros" role="tabpanel" aria-labelledby="meseros-tab">
          {/* Contenido del tab de meseros */}
        </div>
        <div className="tab-pane fade" id="categorias" role="tabpanel" aria-labelledby="categorias-tab">
          {/* Contenido del tab de categorías */}
        </div>
      </div>
    </div>
  );
}
