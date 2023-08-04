import { Link } from "react-router-dom";
import "./style.css"
export const Header = () => {
  return (
    <div>
      <nav className="bg-dark ">
        <ul className="cont-nav">
          <li>
            <Link to="/outlet">Outlet</Link>
          </li>
          <li>
            <Link to="/ejem">Ejemplo</Link>
          </li>
          <li>
            <Link to="/hook">React hook form</Link>
          </li>
          <li>
            <Link to="/mobx">mobx</Link>

            <Link to="/use">useEffect</Link>
          </li>
          <li>
            <Link to="/fil">filter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
