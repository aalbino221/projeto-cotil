/* eslint-disable react/jsx-one-expression-per-line */
import './MyAds.css';
import briga from '../imgs/briga.png';

export default function MyAds() {
  return (
    <div>
      <div className="d-block geral">
        <h1 className="text-center mb-3">Meus Anúncios</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-light btn-lg btn-block w-50"
            >
              <i className="fa-solid fa-plus" />
              Novo Anúncio
            </button>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <div className="input-group w-50 bg-color">
              <i className="fa-solid fa-arrow-down-wide-short fa-lg p-3" />
              <input
                className="form-control border-end-0 border rounded-pill"
                type="search"
                id="example-search-input"
                placeholder="Pesquisar em Meus Anúncios"
                aria-label="Search"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                  type="button"
                >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-between">
            <div className="card mb-3 cards">
              <div className="row no-gutters">
                <div className="d-flex col-md-5 align-items-center px-0">
                  <img
                    src={briga}
                    className="card-img img-fluid h-100"
                    alt="Anuncio imagem"
                  />
                </div>
                <div className="col-md-7 my-auto d-flex">
                  <div className="card-body py-1">
                    <div className="position-relative">
                      <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 botaoX"
                        aria-label="Close"
                      />
                    </div>
                    <h5 className="card-title">BRIGADEIRO</h5>
                    <p className="card-text fs-7">
                      Nisi veniam tempor cupidatat cupidatat do sint aliqua
                      consectetur dolor ullamco est adipisicing.
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags fs-8"
                    >
                      SAÚDE
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags fs-8"
                    >
                      DOCES
                    </button>
                    <p className="card-text mt-2 fs-7">
                      <i className="fa-solid fa-location-dot mx-1" />
                      Cotil, Limeira - 0,5km de distância
                    </p>
                    <p className="card-text mt-2 fs-7">
                      <i className="fa-solid fa-brazilian-real-sign mx-1" />2 -
                      10
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 cards">
              <div className="row no-gutters">
                <div className="d-flex col-md-5 align-items-center px-0">
                  <img
                    src={briga}
                    className="card-img img-fluid h-100"
                    alt="Anuncio imagem"
                  />
                </div>
                <div className="col-md-7 my-auto d-flex">
                  <div className="card-body py-1">
                    <div className="position-relative">
                      <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 botaoX"
                        aria-label="Close"
                      />
                    </div>
                    <h5 className="card-title">BRIGADEIRO</h5>
                    <p className="card-text fs-7">
                      Nisi veniam tempor cupidatat cupidatat do sint aliqua
                      consectetur dolor ullamco est adipisicing.
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags fs-8"
                    >
                      SAÚDE
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags fs-8"
                    >
                      DOCES
                    </button>
                    <p className="card-text mt-2 fs-7">
                      <i className="fa-solid fa-location-dot mx-1" />
                      Cotil, Limeira - 0,5km de distância
                    </p>
                    <p className="card-text mt-2 fs-7">
                      <i className="fa-solid fa-brazilian-real-sign mx-1" />2 -
                      10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="editar px-5 d-none">
        <div className="position-relative">
          <div className="position-absolute top-0 start-0">
            <i className="fa-solid fa-arrow-left fa-2xl" />
          </div>
        </div>
        <h1 className="text-center mb-3">Editar Anuncio</h1>
        <div className="container w-75 px-0">
          <form>
            <div className="row">
              <div className="col-xl-6 d-flex align-items-center">
                <img
                  src={briga}
                  alt="img anuncio"
                  className="img-thumbnail img-fluid"
                  id="img-newAnuncio"
                />
              </div>
              <div className="col-xl-6">
                <div className="row mb-1">
                  <label htmlFor="Contato">
                    <h5>Contato</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="Contato"
                      placeholder="(19) 4002-8922"
                    />
                  </label>
                </div>
                <div className="row mb-1">
                  <label htmlFor="Local">
                    <h5>Local</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="Local"
                      placeholder="Cotil, Limeira"
                    />
                  </label>
                </div>
                <div className="row mb-1">
                  <label htmlFor="Preco">
                    <h5>Preço</h5>
                    <div className="row">
                      <div className="col-4">
                        <input
                          type="text"
                          className="form-control"
                          id="Preco"
                          placeholder="2"
                        />
                      </div>
                      <div className="col-1 align-self-center">-</div>
                      <div className="col-4">
                        <input
                          type="text"
                          className="form-control"
                          id="Preco"
                          placeholder="10"
                        />
                      </div>
                      <div className="col-2">
                        <select className="form-control">
                          <option>R$</option>
                          <option>USD</option>
                        </select>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="container">
                <div className="row my-3">
                  <label htmlFor="Titulo">
                    <h5>Título</h5>
                    <input
                      type="text"
                      className="form-control"
                      id="Titulo"
                      placeholder="Brigadeiro"
                    />
                  </label>
                </div>
                <div className="row mb-3">
                  <h5>Categorias</h5>
                  <div className="d-flex flex-row flex-wrap">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags p-2"
                    >
                      SAÚDE
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags p-2"
                    >
                      DOCES
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm tags p-2"
                    >
                      <i className="fa-solid fa-plus" />
                      ADICIONAR
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="Descricao">
                    <h5>Descrição</h5>
                    <textarea
                      className="form-control"
                      id="Descricao"
                      style={{ height: '100px' }}
                    />
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-dark">
                    Continuar
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-1">
                  <i className="fa-solid fa-circle mx-1" />
                  <i className="fa-regular fa-circle" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
