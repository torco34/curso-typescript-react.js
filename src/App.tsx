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
// import { PagesReutilizar } from "./components/codigoReutilizable/PagesReutilizar";
import { Item } from "./components/practicas/Item";
import { Aplicacion } from "./components/practicas/Aplicacion";
import UseEfe from "./components/practicas/UseEfe";
import { UseEfecto } from "./components/useEffect/UseEfecto";
import { PagesUseEffect } from "./components/useEffect/PagesUseEffect";
import { PagesFather } from "./components/practiNever/PagesFather";
import { PagesPracticas } from "./components/practicas/PagesPracticas";
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
        <Route path="/practica" element={<PagesPracticas />} />
        <Route path="/item" element={<Item />} />
        {/* <Route path="/practica" element={<PagesFather  />} /> */}

        <Route />

        <Route path="/hook" element={<ReactHook />} />
        <Route path="/mobx" element={<PagesApp />} />
        <Route path="/usefe" element={<PagesUseEffect />} />
        {/* <Route path="/efecto" element={<UseEfecto />} /> */}
        <Route />
        <Route path="/fil" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
