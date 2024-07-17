import React, { createContext, useState } from 'react';
import categoriasPreCargadas from '../scripts/categorias/categoriasPreCargadas';
import productosPreCargados from '../scripts/productos/productosPreCargados';
import meserosPreCargados from '../scripts/meseros/meserosPreCargados';
import ventasPreCargadas from '../scripts/ventas/VentasPreCargadas';

// Creación del contexto global
export const GlobalContext = createContext();

// Proveedor global que contiene el estado y las funciones para actualizarlo
export const GlobalProvider = ({ children }) => {
  // Definición de los estados iniciales usando useState
  const [categorias, setCategorias] = useState(categoriasPreCargadas);
  const [productos, setProductos] = useState(productosPreCargados);
  const [meseros, setMeseros] = useState(meserosPreCargados);
  const [ventas, setVentas] = useState(ventasPreCargadas);

  // Devuelve el proveedor con el contexto global y sus valores de estado
  return (
    <GlobalContext.Provider value={{ 
      categorias, setCategorias, 
      productos, setProductos, 
      meseros, setMeseros, 
      ventas, setVentas 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};