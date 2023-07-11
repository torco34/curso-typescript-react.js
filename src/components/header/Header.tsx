import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="bg-dark">
        <ul>
          <li>
            <Link to="/outlet">Outlet</Link>
          </li>
          <li>
            <Link to="/ejem">Ejemplo</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
