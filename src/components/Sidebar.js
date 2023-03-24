import './styles/Sidebar.css';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Sidebar() {
  return (
    <div className="border-end border-black d-flex flex-column flex-grow-1 h-100 overflow-auto p-4">
      <nav id="side" className="px-2">
        <div
          className="nav nav-tabs d-flex flex-row flex-lg-column row-gap-3 border-0"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active border-bottom"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <i className="fa-solid fa-house me-2 fs-5" />
            Home
          </button>
          <button
            className="nav-link border-bottom"
            id="nav-anuncios-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-anuncios"
            type="button"
            role="tab"
            aria-controls="nav-anuncios"
            aria-selected="false"
          >
            <i className="fa-solid fa-bars me-2 fs-5" />
            Meus anúncios
          </button>
          <button
            className="nav-link border-bottom"
            id="nav-favoritos-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-favoritos"
            type="button"
            role="tab"
            aria-controls="nav-favoritos"
            aria-selected="false"
          >
            <i className="fa-solid fa-heart me-2 fs-5" />
            Favoritos
          </button>
          <button
            className="nav-link border-bottom"
            id="nav-config-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-config"
            type="button"
            role="tab"
            aria-controls="nav-config"
            aria-selected="false"
          >
            <i className="fa-solid fa-gear me-2 fs-5" />
            Configurações
          </button>
          <button
            className="nav-link border-bottom"
            id="nav-login-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-login"
            type="button"
            role="tab"
            aria-controls="nav-login"
            aria-selected="false"
          >
            <i className="fa-solid fa-circle-user me-2 fs-5" />
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
