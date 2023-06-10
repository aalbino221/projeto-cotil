/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../../StateContext';
import './Sidebar.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Sidebar({ sideBar }) {
  const [logged] = useContext(StateContext);
  return (
    <div
      className={`border-end border-black d-flex flex-column flex-grow-1 h-100 overflow-auto p-4 ${sideBar} bg-white`}
    >
      <nav
        id="side"
        className="px-2"
      >
        <div
          className="nav nav-tabs d-flex flex-row flex-lg-column row-gap-xxl-2 row-gap-0 border-0 justify-content-center justify-content-lg-start "
          id="nav-tab"
          role="tablist"
        >
          <NavLink
            to="/"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold d-flex flex-column flex-lg-row align-items-center"
          >
            <i className="fa-solid fa-house me-2 fs-5" />
            Home
          </NavLink>
          <NavLink
            to="/myAds"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold d-flex flex-column flex-lg-row align-items-center"
          >
            <i className="fa-solid fa-bars me-2 fs-5" />
            Meus anúncios
          </NavLink>
          <NavLink
            to="/favorites"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold d-flex flex-column flex-lg-row align-items-center"
          >
            <i className="fa-solid fa-heart me-2 fs-5" />
            Favoritos
          </NavLink>
          <button
            className="nav-link border-bottom d-none flex-lg-row flex-column d-sm-flex align-items-center fw-semibold fs-6"
            id="nav-config-tab"
            data-bs-toggle="collapse"
            data-bs-target="#nav-config"
            type="button"
            role="tab"
            aria-controls="nav-config"
            aria-selected="false"
          >
            <i className="fa-solid fa-gear me-2 fs-5" />
            Configurações
          </button>

          <div
            className="collapse"
            id="nav-config"
          >
            <div className="card card-body d-flex flex-column align-items-center border-0 row-gap-3 p-0">
              <button
                className="nav-link bg-light ps-3 py-1 w-100 d-flex align-items-center d-sm-flex d-none"
                id="nav-language"
                type="button"
                aria-controls="nav-favoritos"
              >
                <i className="fa-solid fa-globe mx-2" />
                <select
                  className="form-select form-select border-0 p-0 bg-light"
                  aria-label="Default select example"
                  id="select-lang"
                  defaultValue={0}
                >
                  <option value="0">Português (BR)</option>
                  <option value="1">English (USA)</option>
                  <option value="2">Espanõl (AR)</option>
                  <option value="3">Deutsch (GER)</option>
                </select>
              </button>

              <div className="form-check form-switch py-1 px-0 bg-light w-100 d-flex">
                <label
                  className="form-check-label ps-3"
                  htmlFor="flexSwitchCheckDefault"
                >
                  <input
                    className="form-check-input form-check-input-dark mx-1"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  Claro/Escuro
                </label>
              </div>
            </div>
          </div>

          {!logged ? (
            <NavLink
              to="/login"
              activeclassname="active"
              className="nav-link border-bottom fw-semibold d-flex flex-column flex-lg-row align-items-center"
            >
              <i className="fa-solid fa-circle-user me-2 fs-5" />
              Login
            </NavLink>
          ) : (
            <NavLink
              to="/account"
              activeclassname="active"
              className="nav-link border-bottom fw-semibold d-flex flex-column flex-lg-row align-items-center"
            >
              <i className="fa-solid fa-circle-user me-2 fs-5" />
              Minha Conta
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}
