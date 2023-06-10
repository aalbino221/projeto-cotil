import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder-image.png';

export default function EditAd() {
  return (
    <div className="editar px-5 ">
      <div className="position-relative">
        <div className="position-absolute top-0 start-0">
          <Link
            to="/myAds"
            className="link text-dark"
          >
            <i className="fa-solid fa-arrow-left fa-2xl" />
          </Link>
        </div>
      </div>
      <h1 className="text-center mb-3">Novo Anuncio</h1>
      <div className="container w-75 px-0">
        <form>
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center pt-2">
              <label htmlFor="img">
                <img
                  src={placeholder}
                  alt="img anuncio"
                  className="img-thumbnail img-fluid px-3"
                  id="img-newAnuncio"
                />
                <input
                  type="file"
                  className="form-control d-none"
                  id="img"
                  name="img"
                  accept="image/*"
                />
              </label>
            </div>
            <div className="col-xl-6">
              <div className="row mb-1">
                <label htmlFor="Contato">
                  <h5>Contato</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="Contato"
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
                      />
                    </div>
                    <div className="col-1 align-self-center">-</div>
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
                    <i className="fa-solid fa-plus me-1" />
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
                <button
                  type="button"
                  className="btn btn-dark"
                >
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
  );
}
