import React from "react";
import ReactDOM from "react-dom";
import { Nav } from "./components/Nav";
import { Ventas } from "./components/Ventas";
import { Productos } from "./components/Productos";
import { Meseros } from "./components/Meseros";
import { Categorias } from "./components/Categorias";
import { Footer } from "./components/Footer";

// Renderizar la navegación
ReactDOM.render(<Nav />, document.getElementById("nav"));

// Renderizar las secciones dentro de myTabContent
ReactDOM.render(<Ventas />, document.getElementById("ventas"));
ReactDOM.render(<Productos />, document.getElementById("productos"));
ReactDOM.render(<Meseros />, document.getElementById("meseros"));
ReactDOM.render(<Categorias />, document.getElementById("categorias"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
