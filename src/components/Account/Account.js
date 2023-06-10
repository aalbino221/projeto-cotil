/* eslint-disable react/jsx-one-expression-per-line */
import alana from '../../assets/alana.png';

export default function Account() {
  return (
    <div className="w-100 d-flex flex-column align-items-center gap-3">
      <div>
        <img
          src={alana}
          className="rounded-circle"
          style={{ height: '230px', width: '230px' }}
          alt=""
        />
      </div>
      <h2 className="m-0">Paula Trajano</h2>
      <div className="d-flex gap-3 fs-4 gap-4 align-items-center">
        <p>
          <i className="fa-regular fa-thumbs-up me-2 fs-3" />
          10
        </p>
        <p>
          <i className="fa-regular fa-thumbs-down me-2 fs-3" />2
        </p>
      </div>
      <div className="d-flex align-items-center fs-4 gap-2">
        <i className="fa-regular fa-circle-check" /> <p>Verificado</p>
      </div>
      <div
        className="accordion  w-75"
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Verificação
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <button
                className="btn btn-primary w-100"
                type="button"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Informações pessoais
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row my-3">
                <label htmlFor="email">
                  <h5 className="col">Nome Completo:</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                  />
                </label>
              </div>
              <div className="row my-3">
                <label htmlFor="celular">
                  <h5 className="col">CPF/CNE:</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="celular"
                  />
                </label>
              </div>
              <button
                className="btn btn-primary w-100"
                type="button"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Dados de contato
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="row my-3">
                <label htmlFor="email">
                  <h5 className="col">Email:</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                  />
                </label>
              </div>
              <div className="row my-3">
                <label htmlFor="celular">
                  <h5 className="col">Celular:</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="celular"
                  />
                </label>
              </div>
              <button
                className="btn btn-primary w-100"
                type="button"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
