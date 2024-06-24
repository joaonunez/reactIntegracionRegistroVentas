import React from "react";
import ReactDOM from "react-dom";
import { Nav } from "./Nav";
import { Ventas } from "./Ventas";
import { Productos } from "./Productos";
import { Meseros } from "./Meseros";
import { Categorias } from "./Categorias";
import { Footer } from "./Footer";

ReactDOM.render(<Nav />, document.getElementById("nav"));

// Renderizar las secciones dentro de myTabContent
ReactDOM.render(<Ventas />, document.getElementById("ventas"));
ReactDOM.render(<Productos />, document.getElementById("productos"));
ReactDOM.render(<Meseros />, document.getElementById("meseros"));
ReactDOM.render(<Categorias />, document.getElementById("categorias"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
