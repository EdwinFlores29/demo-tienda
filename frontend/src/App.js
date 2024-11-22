import Navegacion from "./plantilla/Navegacion";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListadoCategoria from "./categoria/ListadoCategoria";
import AgregarCategoria from "./categoria/AgregarCategoria";
import EditarCategoria from "./categoria/EditarCategoria";


function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Navegacion />
            <Routes>
                <Route exact path="/" element={<ListadoCategoria />} />
                <Route exact path="/agregar" element={<AgregarCategoria />} />
                <Route exact path="/editar/:id" element={<EditarCategoria />} />
            </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
