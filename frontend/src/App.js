import Navegacion from "./plantilla/Navegacion";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Navegacion />
        </BrowserRouter>
      </div>

  );
}

export default App;
