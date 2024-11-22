import React from 'react';
import {Link} from "react-router-dom";

export default function Navegacion() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Tienda App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            <Link className="nav-link" to="/agregar-categoria">Agregar Categoria</Link>

                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/agregar-producto">Agregar Producto</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}