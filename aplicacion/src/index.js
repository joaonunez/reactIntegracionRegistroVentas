import React from "react";
import ReactDOM from "react-dom";
import {Nav} from "./Nav";
import {Ventas} from "./Ventas";
import {Productos} from "./Productos"
import {Footer} from "./Footer";




ReactDOM.render(<Nav />, document.getElementById("nav"));
ReactDOM.render(<Ventas/>, document.getElementById("ventas"));
ReactDOM.render(<Productos/>, document.getElementById("productos"));
ReactDOM.render(<Footer/>, document.getElementById("footer"))

/* ReactDOM.render(<Productos/>, document.getElementById("myTabContent"));
ReactDOM.render(<Productos/>, document.getElementById("myTabContent")); */


