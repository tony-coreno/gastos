import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbars">
      <img src="https://img.icons8.com/color/48/000000/money-bag.png" />
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/inventory">
            Inventario
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Gastos
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            // role="button"
            aria-expanded="false"
          >
            Mi Perfil
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Mi Cuenta
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item" to="/login">
                Cerrar Sesión
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
