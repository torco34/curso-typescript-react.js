import { NavLink, Outlet } from "react-router-dom";

export const Produecto = () => {
  return (
    <div>
      <h2>componecte de Producto</h2>
      <ul>
        <li>
          <NavLink to="/luis">luis</NavLink>
        </li>
        <li>
          <NavLink to="/">jose</NavLink>
        </li>
        <li>
          <NavLink to="/">migurel</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
