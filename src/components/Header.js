/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-black partial-height">
        {/**/}
        <div className="col-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <i className="text-dark fa-solid fa-bars fs-4" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <p className="text-dark fw-bold fs-5 mb-0">LIBRE MARKET</p>
              </a>
            </li>
          </ul>
        </div>

        {/**/}
        <div className="col-2" />
        {/**/}
        <div className="col-4 d-flex align-items-center justify-content-evenly">
          <div className="col-3 d-flex justify-content-center">
            <nav className="nav-item dropdown">
              <a
                className="nav-link fw-semibold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Limeira
                <i className="fa-solid fa-chevron-down fa-sm ms-1 " />
              </a>
              <ul
                className="dropdown-menu border-0 bg-transparent"
                aria-labelledby="navbarDropdown"
                style={{ position: 'absolute', left: '-2.5rem' }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light rounded-0"
                    placeholder="Cidade"
                    aria-label="Cidade"
                    aria-describedby="basic-addon2"
                  />
                  <button
                    type="button"
                    className=" input-group-text btn btn-light rounded-0 border border-start-0 bg-light "
                  >
                    <i className="fa fa-search" id="searchCity" />
                  </button>
                </div>
              </ul>
            </nav>
          </div>
          <div className="input-group rounded-pill">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Pesquisar Anúncio"
              aria-label="Pesquisar Anúncio"
              aria-describedby="basic-addon2"
            />
            <button
              type="button"
              className=" input-group-text btn btn-light border border-start-0 bg-light"
            >
              <i className="fa fa-search " id="search" />
            </button>
          </div>
        </div>
        {/**/}
        <div className="col-2" />
        {/**/}
        <div className="col-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Entrar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cadastrar
              </a>
            </li>
          </ul>
        </div>
        {/**/}
      </nav>
    </div>
  );
}
