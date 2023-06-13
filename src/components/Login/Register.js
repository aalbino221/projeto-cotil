/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h2 className="text-center mb-3 fw-bold">CADASTRO</h2>
      <div className="container d-flex col-lg-6 p-5">
        <form className="row g-3 ">
          <div className="col-12 ">
            <label
              htmlFor="inputName"
              className="form-label "
            >
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col-12">
            <label
              htmlFor="inputCPF"
              className="form-label"
            >
              CPF/RNE
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCPF"
            />
          </div>
          <div className="col-12">
            <label
              htmlFor="inputEmail4"
              className="form-label"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-12">
            <label
              htmlFor="inputTel"
              className="form-label"
            >
              Telefone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTel"
            />
          </div>
          <div className="col-md-6 sm-12">
            <label
              htmlFor="inputPassword4"
              className="form-label"
            >
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-6 sm-12">
            <label
              htmlFor="inputPassword5"
              className="form-label"
            >
              Confirmar senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword5"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-danger bg-red col-6 rounded-0"
            >
              REGISTRAR
            </button>
          </div>
          <div className="text-center">
            <p>
              Já tem uma conta?
              <NavLink
                to="/login"
                className="text-red"
              >
                Entrar
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
