import Mesero from "../../class/Mesero";
import Producto from "../../class/Producto";
import Venta from "../../class/Venta";

let ventasArray = [
    new Venta(
      1,
      new Mesero("18.232.243-5", "Eduardo Gomez"), // Crea el Mesero directamente
      new Producto(1, "Café Espresso", 1500), // Crea el Producto directamente
      2,
      "2024-07-01"
    ),
    new Venta(
      2,
      new Mesero("19.132.254-5", "Juan Pérez"),
      new Producto(2, "Capuccino", 2000),
      1,
      "2024-07-02"
    ),
    // Agrega más ventas según sea necesario
  ];

export default ventasArray;
