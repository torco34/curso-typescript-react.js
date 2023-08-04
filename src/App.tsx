import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
// import { Pages } from "./components/curso-typescript/Pages";
import { Outlet } from "./components/outlet/Outlet";
import { Produecto } from "./components/outlet/Produecto";
import { Practica } from "./components/practicas/Practica";
import { ReactHook } from "./components/hookReactForm/ReactHook";
import { PagesApp } from "./components/MobX/PagesApp"
import { Ejercicio } from "./components/useEfecto/Ejercicio.";

import { Filter } from "./components/filter/pages/Filter";
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
        <Route path="/ejem" element={<Practica />} />
        <Route path="/hook" element={<ReactHook />} />
        <Route path="/mobx" element={<PagesApp />} />
        <Route path="/use" element={<Ejercicio />} />
        <Route path="/fil" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
