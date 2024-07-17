import React, { createContext, useState, useEffect } from 'react';
import Categoria from '../class/Categoria';
import Mesero from '../class/Mesero';
import Producto from '../class/Producto';
import Venta from '../class/Venta';
// Creación del contexto global
export const GlobalContext = createContext();

// Proveedor global que contiene el estado y las funciones para actualizarlo
export const GlobalProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [meseros, setMeseros] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasRes = await fetch('/apis/categorias.json');
        const categoriasData = await categoriasRes.json();
        setCategorias(categoriasData.map(cat => new Categoria(cat.id, cat.nombre)));

        const productosRes = await fetch('/apis/productos.json');
        const productosData = await productosRes.json();
        setProductos(productosData.map(prod => 
          new Producto(prod.id, prod.nombre, new Categoria(prod.categoria.id, prod.categoria.nombre), prod.precio)
        ));

        const meserosRes = await fetch('/apis/meseros.json');
        const meserosData = await meserosRes.json();
        setMeseros(meserosData.map(mes => new Mesero(mes.rut, mes.nombre)));

        const ventasRes = await fetch('/apis/ventas.json');
        const ventasData = await ventasRes.json();
        setVentas(ventasData.map(venta => 
          new Venta(venta.id, new Mesero(venta.mesero.rut, venta.mesero.nombre), 
          new Producto(venta.producto.id, venta.producto.nombre, 
          new Categoria(venta.producto.categoria.id, venta.producto.categoria.nombre), 
          venta.producto.precio), venta.cantidad, venta.fecha)
        ));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    
    fetchData();
  }, []);

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
