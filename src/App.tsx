import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
