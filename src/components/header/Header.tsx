import { Link } from "react-router-dom";
import "./style.css"
export const Header = () => {
  return (
    <div>
      <nav className="bg-dark p-4">
        <ul className="cont-nav  ">
          <li className="border border-info btn list-inline-item ">
            <Link to="/outlet">Outlet</Link>
          </li>
          <li className="border border-info  btn list-inline-item text-center ">
            <Link to="/practica">Practicas    </Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/reutilizar">Código Reutiliza</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/hook">React hook form</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/mobx">mobx</Link>
          </li >
          <li className="text-center btn list-inline-item ">
            <Link to="/usefe">useEffect</Link>
          </li >
          <li className="border border-info btn list-inline-item ">
            <Link to="/fil">filter</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};
