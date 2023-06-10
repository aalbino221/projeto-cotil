/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardPreview from './CardPreview';

export default function EditAd() {
  const location = useLocation();
  const { item } = location.state;
  const [step, setStep] = useState(1);

  const imgRef = useRef(null);
  const contactRef = useRef(null);
  const locationRef = useRef(null);
  const priceRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    contactRef.current.value = item.contact;
    locationRef.current.value = item.location;
    priceRef.current.value = item.price;
    titleRef.current.value = item.title;
    descriptionRef.current.value = item.description;
  });

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
      <h1 className="text-center mb-3">Editar Anuncio</h1>

      <div className="container w-75 px-0 d-flex justify-content-center">
        <form className={step === 1 ? 'd-block' : 'd-none'}>
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center pt-2">
              <label htmlFor="img">
                <img
                  src={item.img}
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
                  ref={imgRef}
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
                    ref={contactRef}
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
                    ref={locationRef}
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
                        ref={priceRef}
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
                    ref={titleRef}
                  />
                </label>
              </div>
              <div className="row mb-3">
                <h5>Categorias</h5>
                <div className="d-flex flex-row flex-wrap">
                  {item.tags.map((tag) => (
                    <button
                      key={tag + 1}
                      type="button"
                      className="btn btn-secondary btn-sm tags "
                    >
                      {tag}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm tags p-2"
                  >
                    <i className="fa-solid fa-plus" />
                    Adicionar
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
                    ref={descriptionRef}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
        {step === 2 && <CardPreview adInfo={item} />}
      </div>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setStep(2);
          }}
        >
          Continuar
        </button>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <button
          className="btnNoStyle"
          type="button"
          onClick={() => {
            setStep(1);
          }}
        >
          <i className="fa-solid fa-circle mx-1" />
        </button>
        <button
          type="button"
          className="btnNoStyle"
          onClick={() => {
            setStep(2);
          }}
        >
          <i
            className={
              step === 1 ? 'fa-regular fa-circle' : 'fa-solid fa-circle mx-1'
            }
          />
        </button>
      </div>
    </div>
  );
}
