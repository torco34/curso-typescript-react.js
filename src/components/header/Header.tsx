import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="bg-dark">
        <ul>
          <li>
            <Link to="/pages">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
