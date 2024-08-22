import React from "react";
import { Nav } from "./Nav";
import { Ventas } from "./Ventas";
import { Productos } from "./Productos";
import { Meseros } from "./Meseros";
import { Categorias } from "./Categorias";
import { Footer } from "./Footer";

export function MainContainer() {
  return (
    <div>
      <Nav />
      <div className="tab-content text-center mt-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="ventas"
          role="tabpanel"
          aria-labelledby="ventas-tab"
        >
          <Ventas />
        </div>
        <div
          className="tab-pane fade"
          id="productos"
          role="tabpanel"
          aria-labelledby="productos-tab"
        >
          <Productos />
        </div>
        <div
          className="tab-pane fade"
          id="meseros"
          role="tabpanel"
          aria-labelledby="meseros-tab"
        >
          <Meseros />
        </div>
        <div
          className="tab-pane fade"
          id="categorias"
          role="tabpanel"
          aria-labelledby="categorias-tab"
        >
          <Categorias />
        </div>
      </div>
      <Footer />
    </div>
  );
}
