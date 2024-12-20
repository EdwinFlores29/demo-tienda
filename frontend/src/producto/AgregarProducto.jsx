import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function AgregarProducto(){
    let navegacion = useNavigate();

    const [producto, setProducto] = useState({
        descripcion: "",
        precio: "",
        stock: "",
        estado: ""
    });

    const {descripcion, precio, stock, estado} = producto;

    const onInputChange = (e) => {
        //spread operator ... (expandir atributos )
        setProducto({...producto    , [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/productos";
        await axios.post(urlBase, producto);
        //redirigimos a la pagina de inicio
        navegacion('/')
    }

    return (
        <div className="container">
            <div className="container text-center" style={{margin: '30px'}}>
                <h3>Agregar Producto</h3>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion"
                           name="descripcion" required={true}
                           value={descripcion} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="number" step="any" className="form-control" id="precio"
                           name="precio"
                           value={precio} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="number" step="any" className="form-control" id="stock"
                           name="stock"
                           value={stock} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="estado"
                           name="estado" required={true}
                           value={estado} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                    <a href="/" className="btn btn-danger btn-sm">Regresar</a>
                </div>
            </form>
        </div>
    )
}