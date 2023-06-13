/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <div className="container d-flex col-lg-6 p-5 mt-5">
        <form className="row g-3 d-flex justify-content-center align-items-center">
          <h2 className="text-center mb-3 fw-bold mb-5">ENTRAR</h2>
          <div className="col-8 text-center">
            <label
              htmlFor="inputEmail4"
              className="form-label "
            >
              Email/Telefone
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-8 text-center mb-5">
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
          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-danger bg-red col-6 rounded-0"
            >
              Entrar
            </button>
          </div>
          <div className="text-center">
            <p>
              Não tem uma conta?
              <NavLink
                to="/login/register"
                className="text-red"
              >
                Cadastrar
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
