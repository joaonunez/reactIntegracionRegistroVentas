import Categoria from "../../class/Categoria";
import Producto from "../../class/Producto";

let productos = [
  // array de productos inicializados con varios objetos producto
  new Producto(1, "Café Espresso", new Categoria(1, "Bebestible"), 1500),
  new Producto(2, "Capuccino", new Categoria(1, "Bebestible"), 2000),
  new Producto(3, "Sandwich Ave", new Categoria(2, "Comestible"), 3000),
  new Producto(4, "Té Verde", new Categoria(1, "Bebestible"), 1200),
  new Producto(5, "Ensalada de Frutas", new Categoria(2, "Comestible"), 1800),
  new Producto(6, "Hamburguesa Clásica", new Categoria(2, "Comestible"), 2500),
  new Producto(7, "Ensalada César", new Categoria(2, "Comestible"), 1800),
  new Producto(
    8,
    "Galletas de Chocolate",
    new Categoria(2, "Comestible"),
    1500
  ),
  new Producto(9, "Agua Mineral", new Categoria(1, "Bebestible"), 1000),
  new Producto(10, "Pizza Margarita", new Categoria(2, "Comestible"), 2200),
  new Producto(11, "Helado de Vainilla", new Categoria(2, "Comestible"), 2000),
];

export default productos;
