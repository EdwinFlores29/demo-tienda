import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {NumericFormat} from "react-number-format";
export default function ListadoCategoria() {

    const urlBase = "http://localhost:8080/tienda-app/categorias"

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        cargarCategoria();
    }, []);

    const cargarCategoria = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar categorias");
        console.log(resultado.data);
        setCategorias(resultado.data);
    }

    const eliminarCategoria = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarCategoria();
    }

    const urlBase_producto = "http://localhost:8080/tienda-app/productos";

    const [productos, setTProductos] = useState([]);

    useEffect(() => {
        cargarProducto();
    }, []);

    const cargarProducto = async () => {
        const resultado = await axios.get(urlBase_producto);
        console.log("Resultado cargar empleados");
        console.log(resultado.data);
        setTProductos(resultado.data);
    }

    const eliminarProducto = async (id) => {
        await axios.delete(`${urlBase_producto}/${id}`);
        cargarProducto();
    }

    return (
        <div className="container">
            <div className="container text-center" style={{margin: "30px"}}>
                <h3>
                    Tienda App Demo - Categorias
                </h3>
            </div>
            <table className="table table-hover align-middle">
                <thead className="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Estado</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    //Iteramos el arreglo de empleados
                    categorias.map((categoria, indice) => (
                        <tr key={indice}>
                            <th scope="row">{categoria.idCategoria}</th>
                            <td>{categoria.descripcion}</td>
                            <td>{categoria.estado}</td>
                            <td className="text-center">
                                <div>
                                    <Link to={`/editar-categoria/${categoria.idCategoria}`}
                                          className="btn btn-warning btn-sm me-3">Editar</Link>
                                    <button onClick={() => eliminarCategoria(categoria.idCategoria)}
                                            className="btn btn-danger btn-sm">Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <div className="container text-center" style={{margin: "30px"}}>
                <h3>
                    Tienda App Demo - Productos
                </h3>
            </div>

            <table className="table table-hover align-middle">
                <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    //Iteramos el arreglo de empleados
                    productos.map((producto, indice) => (
                        <tr key={indice}>
                            <th scope="row">{producto.idEmpleado}</th>
                            <td>{producto.descripcion}</td>
                            <td><NumericFormat value={producto.precio}
                                               displayType={'text'}
                                               thousandSeparator=','
                                               prefix={'C$'}
                                               decimalScale={2}
                                               fixedDecimalScale/></td>
                            <td>{producto.stock}</td>
                            <td>{producto.estado}</td>
                            <td className="text-center">
                                <div>
                                    <Link to={`/editar-producto/${producto.idProducto}`}
                                          className="btn btn-warning btn-sm me-3">Editar</Link>
                                    <button onClick={() => eliminarProducto(producto.idProducto)}
                                            className="btn btn-danger btn-sm">Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <div className="container text-center" style={{margin: "30px"}}>
                <h3>
                    Tienda App Demo - Clientes
                </h3>
            </div>

            <table className="table">
                <thead>
                <tr>
                <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

            <div className="container text-center" style={{margin: "30px"}}>
                <h3>
                    Tienda App Demo - Ventas
                </h3>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

            <div className="container text-center" style={{margin: "30px"}}>
                <h3>
                    Tienda App Demo - DetalleVentas
                </h3>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

        </div>


    )
}