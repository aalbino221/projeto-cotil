/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import './MyAds.css';
import Card from './Card';
import myAdsValues from '../../mock/myAdCards';

export default function MyAds() {
  return (
    <div>
      <div className=" geral">
        <h1 className="text-center mb-3">Meus Anúncios</h1>
        <div className="container">
          <div className="d-flex justify-content-center">
            <Link
              to="/myAds/new"
              style={{ textDecoration: 'none', color: 'black' }}
              className="w-50"
            >
              {' '}
              <button
                type="button"
                className="btn btn-light btn-lg btn-block w-100"
              >
                <i className="fa-solid fa-plus" />
                Novo Anúncio
              </button>
            </Link>
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
            <Link
              to="/myAds/edit"
              className="link text-dark"
              state={{ item: myAdsValues[0] }}
            >
              <Card adInfo={myAdsValues[0]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
