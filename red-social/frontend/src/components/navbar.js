import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Red Social
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/registro">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/sesion">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#newPost"
                href="#"
              >
                Crear publicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi-person-circle" />
                <span className="ms-2">test_user</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
