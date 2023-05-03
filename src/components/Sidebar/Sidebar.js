/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Sidebar({ sideBar }) {
  return (
    <div
      className={`border-end border-black d-flex flex-column flex-grow-1 h-100 overflow-auto p-4 ${sideBar}`}
    >
      <nav id="side" className="px-2">
        <div
          className="nav nav-tabs d-flex flex-row flex-lg-column row-gap-3 border-0"
          id="nav-tab"
          role="tablist"
        >
          <NavLink
            to="/"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold"
          >
            <i className="fa-solid fa-house me-2 fs-5" />
            Home
          </NavLink>
          <NavLink
            to="/myAds"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold"
          >
            <i className="fa-solid fa-bars me-2 fs-5" />
            Meus anúncios
          </NavLink>
          <NavLink
            to="/favorites"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold"
          >
            <i className="fa-solid fa-heart me-2 fs-5" />
            Favoritos
          </NavLink>
          <button
            className="nav-link border-bottom"
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

          <div className="collapse" id="nav-config">
            <div className="card card-body d-flex flex-column align-items-center border-0 row-gap-3 p-0">
              <button
                className="nav-link bg-light ps-3 py-1 w-100 d-flex align-items-center"
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

          <NavLink
            to="/login"
            activeclassname="active"
            className="nav-link border-bottom fw-semibold"
          >
            <i className="fa-solid fa-circle-user me-2 fs-5" />
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
