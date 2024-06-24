import React from "react";
import ReactDOM from "react-dom";
import {Nav} from "./Tabs";
import {Contenedor} from "./ContenedorTabs";
import {Footer} from "./Footer";




ReactDOM.render(<Nav />, document.getElementById("nav"));
ReactDOM.render(<Contenedor/>, document.getElementById("contenido"))
ReactDOM.render(<Footer/>, document.getElementById("footer"))

/* ReactDOM.render(<Productos/>, document.getElementById("myTabContent"));
ReactDOM.render(<Productos/>, document.getElementById("myTabContent")); */


