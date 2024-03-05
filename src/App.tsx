import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { CursoPage } from "./cursoTailwind/CursoPage";
import { PagesHome } from "./page/PagesHome";
import { PagesPractica } from "./page/PagesPractica";

function App() {
  return (
    <Router>

      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<PagesHome />} />
          <Route path="curso" element={<CursoPage />} />
          <Route path="ejercicio" element={<PagesPractica />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
