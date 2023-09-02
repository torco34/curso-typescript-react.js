import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
// import { Pages } from "./components/curso-typescript/Pages";
import { Outlet } from "./components/outlet/Outlet";
import { Produecto } from "./components/outlet/Produecto";
import { PracticasPages } from "./components/practicas/PracticasPages";
import { ReactHook } from "./components/hookReactForm/ReactHook";
import { PagesApp } from "./components/MobX/PagesApp"
import { Ejercicio } from "./components/useEfecto/Ejercicio.";

import { Filter } from "./components/filter/pages/Filter";
import { PagesReutilizar } from "./components/codigoReutilizable/PagesReutilizar";
// import { ModalComponent } from "./components/codigoReutilizable/bootstrap-react/ModalComponent";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ruta outlet */}
        <Route path="/outlet" element={<Produecto />}>
          <Route path="" element={<Outlet />}></Route>
        </Route>
        {/* ejemplo */}
        <Route path="/practicas" element={<PracticasPages />} />
        <Route path="/reutilizar" element={<PagesReutilizar />} >
          {/* <Route path="/modal" element={<ModalComponent />} /> */}
        </Route>
        <Route path="/hook" element={<ReactHook />} />
        <Route path="/mobx" element={<PagesApp />} />
        <Route path="/use" element={<Ejercicio />} />
        <Route path="/fil" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
