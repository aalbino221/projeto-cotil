/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import mascara from '../imgs/mascara.png';
import './Card.css';
import alana from '../imgs/alana.png';

export default function Card() {
  return (
    <>
      <div
        className="card position-relative"
        style={{ width: '20rem' }}
        id="cardAd"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i
          className="fa-regular fa-heart position-absolute top-0 start-0 fs-2 px-1 py-1"
          id="favoriteAd"
          style={{ color: 'black' }}
        />
        <img src={mascara} className="card-img-top" alt="..." />
        <div className="card-body fs-7">
          <h5 className="card-title fs-5">MASCARA</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu augue tortor. Quisque varius pretium sapien, eu suscipit quam
            facilisis ornare. Fusce vel eleifend orci.
          </p>
          <div>
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
              UNICAMP
            </button>
            <p className="card-text mt-2">
              <i className="fa-solid fa-location-dot mx-1" />
              Cotil, Limeira - 0,5km de distância
            </p>
            <p className="card-text mt-2">
              <i className="fa-solid fa-brazilian-real-sign mx-1" />5 - 10
            </p>
          </div>
          <div className="d-flex mt-1 gap-2 align-items-center fs-7">
            <div>
              <img src={alana} className="avatar " alt="" />
            </div>
            <div>
              <p className="fw-semibold">
                Alana123{' '}
                <span>
                  {' '}
                  <i className="fa-regular fa-circle-check" />
                </span>
              </p>
              <div className="d-flex gap-3">
                <p>
                  <i className="fa-regular fa-thumbs-up me-1" />
                  20
                </p>
                <p>
                  <i className="fa-regular fa-thumbs-down me-1" />1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content px-4 pb-2">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className=" position-relative">
                <i
                  className="fa-solid fa-heart position-absolute start-0 fs-2 px-1 py-1"
                  id="favoriteAd"
                  style={{ color: 'red' }}
                />
                <img
                  src={mascara}
                  alt=""
                  style={{ height: '255px', width: '100%' }}
                  className="mx-auto d-block rounded mt-2"
                />
              </div>
              <h5 className="card-title fs-5 text-center mt-2 mb-2">MASCARA</h5>
              <div className="d-flex justify-content-center">
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
                  UNICAMP
                </button>
              </div>
              <p className="card-text mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu augue tortor. Quisque varius pretium sapien, eu
                suscipit quam facilisis ornare. Fusce vel eleifend orci.
              </p>
              <ul className="mt-1">
                <li>Pacote de 20 mascaras - R$ 20</li>
                <li>Pacote de 10 mascaras - R$ 10</li>
                <li>5 Pacotes de 20 mascaras - R$ 80</li>
                <li>5 Pacotes de 10 mascaras - R$ 40</li>
              </ul>
              <div className="d-flex mt-1 gap-2 align-items-center fs-7">
                <div>
                  <img src={alana} className="avatar " alt="" />
                </div>
                <div className="fw-bold">
                  <p>
                    Alana123{' '}
                    <span>
                      {' '}
                      <i className="fa-regular fa-circle-check" />
                    </span>
                  </p>
                  <div className="d-flex gap-3">
                    <p>
                      <i className="fa-regular fa-thumbs-up me-1" />
                      20
                    </p>
                    <p>
                      <i className="fa-regular fa-thumbs-down me-1" />1
                    </p>
                  </div>
                </div>
              </div>
              <div className="fw-bold">
                <p className="card-text mt-2">
                  <i className="fa-solid fa-location-dot me-1" />
                  Cotil, Limeira - 0,5km de distância
                </p>
                <p className="card-text mt-2">
                  <i className="fa-brands fa-whatsapp me-1 fw-bold" />
                  (19)4002-8922
                </p>
              </div>
              <p className="fw-bold mt-2">Deixe sua avaliação aqui!</p>
              <div className="d-flex fw-bold fs-1 mt-2 gap-4">
                <i className="fa-regular fa-thumbs-up me-1" />
                <i className="fa-regular fa-thumbs-down me-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
