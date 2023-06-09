import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Pages } from "./components/curso-typescript/Pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        {/* <Route path="/perfil" element={<Perfil />} /> */}
        {/* <Route path="/ejercicio" element={<Ejercicio />} /> */}
        {/* <Route path="/restauran" element={<Pages />} /> */}
        {/* <Route path="/index" element={<Index />}></Route>
  <Route path="/pages" element={<Pages2 />}></Route>
  <Route path="/pages2" element={<Books />}></Route>
  <Route path="/pages3" element={<PagesEjercicio />}></Route>
  <Route path="/pages4" element={<Pages4 />}></Route>
  <Route path="/pages5" element={<Pages5 />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
