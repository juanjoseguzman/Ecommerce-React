import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export default function Navbar({ menuItems }) {
  const { auth, logout } = useAuthContext();
  const filtro = menuItems.filter((menuItem) => {
    if (menuItem.label !== "Login") {
      return (
        <li key={menuItem.id}>
          <Link className="enlace" to={menuItem.path}>
            {menuItem.label}
          </Link>
        </li>
      );
    }
  });
  return (
    <div>
      <nav className="menu">
        <ul>
          {!auth
            ? menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link className="enlace" to={menuItem.path}>
                    {menuItem.label}
                  </Link>
                </li>
              ))
            : filtro.map((menuItem, index) => (
                <li key={index}>
                  <Link className="enlace" to={menuItem.path}>
                    {menuItem.label}
                  </Link>
                </li>
              ))}
          {auth && (
            <li>
              <button className="enlace" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
