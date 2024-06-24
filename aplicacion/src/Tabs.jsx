import React from "react";
import ReactDOM from "react-dom";
export function Nav(){
    return(
        <div>
            <div class="mt-3 m-auto text-center">
                <h1>Gestion Sistema De Negocio</h1>
            </div>
        <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active tab" id="ventas-tab" data-bs-toggle="tab" data-bs-target="#ventas" type="button" role="tab" aria-controls="ventas" aria-selected="true">Gestion De Ventas</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link tab" id="productos-tab" data-bs-toggle="tab" data-bs-target="#productos" type="button" role="tab" aria-controls="productos" aria-selected="false">Gestion De Productos</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link tab" id="meseros-tab" data-bs-toggle="tab" data-bs-target="#meseros" type="button" role="tab" aria-controls="meseros" aria-selected="false">Gestion De Meseros</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link tab" id="categorias-tab" data-bs-toggle="tab" data-bs-target="#categorias" type="button" role="tab" aria-controls="categorias" aria-selected="false">Gestion de Categorias</button>
            </li>
        </ul>
        </div>
    );
}