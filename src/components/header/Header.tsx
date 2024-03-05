import { Link, Outlet } from "react-router-dom";
import "./style.css"
export const Header = () => {
  return (
    <div>
      <nav className="bg-dark">
        <ul className="cont-nav  ">
          <li className="list-inline-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="btn list-inline-item text-center ">
            <Link to="curso">Tailwind curso   </Link>
          </li>
          <li className=" btn list-inline-item ">
            <Link to="ejercicio">Practica</Link>
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
      <Outlet />
    </div>
  );
};
