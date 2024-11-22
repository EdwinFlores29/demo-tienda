import Navegacion from "./plantilla/Navegacion";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListadoCategoria from "./categoria/ListadoCategoria";
import AgregarCategoria from "./categoria/AgregarCategoria";
import EditarCategoria from "./categoria/EditarCategoria";
import AgregarProducto from "./producto/AgregarProducto";
import EditarProducto from "./producto/EditarProducto";


function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Navegacion />
            <Routes>
                <Route exact path="/" element={<ListadoCategoria />} />
                <Route exact path="/agregar-categoria" element={<AgregarCategoria />} />
                <Route exact path="/agregar-producto" element={<AgregarProducto />} />
                <Route exact path="/editar-categoria/:id" element={<EditarCategoria />} />
                <Route exact path="/editar-producto/:id" element={<EditarProducto />} />
            </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
