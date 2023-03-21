/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-black">
      <div className="container-fluid">
        {/**/}
        <div className="col-3 d-flex align-items-center justify-content-evenly">
          {' '}
          <i className="fa-solid fa-bars display-6" />
          <p className="display-5 text-dark">LIBRE MARKET</p>
        </div>
        {/**/}
        <div className="col-6 d-flex align-items-center justify-content-evenly">
          <div className="col-3 d-flex justify-content-center">
            <nav className="nav-item dropdown">
              <a
                className="nav-link fw-bolder fs-5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Limeira
                <i className="fa-solid fa-chevron-down ms-1 " />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn ml-4">
                    <button className="btn btn-default" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </ul>
            </nav>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-btn ml-4">
              <button className="btn btn-default" type="submit">
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
        </div>
        {/**/}
        <div className="col-3">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page" href="#">
                Entrar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">
                Cadastrar
              </a>
            </li>
          </ul>
        </div>
        {/**/}
      </div>
    </nav>
  );
}
