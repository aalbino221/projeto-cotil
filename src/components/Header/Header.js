/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../../StateContext';
import alana from '../../assets/alana.png';

export default function Header({ setBar }) {
  const [logged, setLogged] = useContext(StateContext);
  return (
    <div className="container-fluid d-none d-sm-block">
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-black partial-height">
        {/**/}
        <div className="col-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                onClick={() => setBar()}
              >
                <i className="text-dark fa-solid fa-bars fs-4" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
              >
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
                    <i
                      className="fa fa-search"
                      id="searchCity"
                    />
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
              <i
                className="fa fa-search "
                id="search"
              />
            </button>
          </div>
        </div>
        {/**/}
        <div className="col-2" />
        {/**/}
        <div className="col-2">
          {!logged ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
              <li className="nav-item">
                <NavLink to="/account">
                  <button
                    className="btnNoStyle fw-semibold text-dark"
                    type="button"
                    onClick={() => {
                      setLogged(!logged);
                    }}
                  >
                    Entrar
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeclassname="active"
                  className="nav-link fw-semibold text-dark"
                >
                  Cadastro
                </NavLink>
              </li>
            </ul>
          ) : (
            <div className="d-flex align-items-center me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center ">
              <nav className="nav-item dropdown">
                <a
                  href=""
                  id="navbarUserDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="d-flex justify-content-center align-items-center"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div>
                    <img
                      src={alana}
                      className="rounded-circle"
                      style={{ height: '35px', width: '35px' }}
                      alt=""
                    />
                  </div>
                  <p className="ms-1 fs-6 fw-semibold">Paula Trajano</p>
                </a>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item">
                    <NavLink to="/account">
                      <button
                        type="button"
                        className="btnNoStyle fw-semibold text-dark w-100"
                      >
                        <i className="fa-solid fa-circle-user" /> Conta
                      </button>
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink to="/">
                      <button
                        type="button"
                        className="btnNoStyle fw-semibold text-dark w-100 "
                        onClick={() => {
                          setLogged(!logged);
                        }}
                      >
                        <i className="fa-solid fa-door-open" /> Sair
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        {/**/}
      </nav>
    </div>
  );
}
