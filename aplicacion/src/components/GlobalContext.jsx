import React, { createContext, useState } from 'react';
import categoriasPreCargadas from '../scripts/categorias/categoriasPreCargadas';
import productosPreCargados from '../scripts/productos/productosPreCargados';
import meserosPreCargados from '../scripts/meseros/meserosPreCargados';
import ventasPreCargadas from '../scripts/ventas/VentasPreCargadas';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasPreCargadas);
  const [productos, setProductos] = useState(productosPreCargados);
  const [meseros, setMeseros] = useState(meserosPreCargados);
  const [ventas, setVentas] = useState(ventasPreCargadas);

  return (
    <GlobalContext.Provider value={{ categorias, setCategorias, productos, setProductos, meseros, setMeseros, ventas, setVentas }}>
      {children}
    </GlobalContext.Provider>
  );
};
