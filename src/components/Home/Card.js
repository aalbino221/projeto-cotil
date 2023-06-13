/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Card.css';
import { useState, useEffect } from 'react';

export default function Card({ adInfo, id }) {
  const {
    img,
    title,
    tags,
    description,
    location,
    price,
    imgAuthor,
    nameAuthor,
    verified,
    likes,
    deslikes,
    contact,
  } = adInfo;

  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div
        className="card position-relative"
        style={{ width: '20rem' }}
        id="cardAd"
        data-bs-toggle="modal"
        data-bs-target={`#modal${id}`}
      >
        <button
          onClick={() => {
            setFavorite(!favorite);
          }}
          type="button"
          className="btnNoStyle position-absolute top-0 start-0 fs-2"
        >
          {favorite ? (
            <i
              className="fa-solid fa-heart position-absolute top-0 py-1"
              id="favoriteAd"
              style={{ color: 'red' }}
            />
          ) : (
            <i
              className="fa-regular fa-heart position-absolute top-0 py-1"
              id="favoriteAd"
            />
          )}
        </button>
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body fs-7 d-flex flex-column">
          <h5 className="card-title fs-5">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="mt-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="btn btn-secondary btn-sm tags fs-8"
              >
                {tag}
              </button>
            ))}
            <p className="card-text mt-2">
              <i className="fa-solid fa-location-dot mx-1" />
              {location}
            </p>
            <p className="card-text mt-2">
              <i className="fa-solid fa-brazilian-real-sign mx-1" />
              {price}
            </p>
          </div>
          <div className="d-flex mt-1 gap-2 align-items-center fs-7">
            <div>
              <img
                src={imgAuthor}
                className="avatar "
                alt=""
              />
            </div>
            <div>
              <p className="fw-semibold">
                {nameAuthor}{' '}
                <span>
                  {' '}
                  {verified && <i className="fa-regular fa-circle-check" />}
                </span>
              </p>
              <div className="d-flex gap-3">
                <p>
                  <i className="fa-regular fa-thumbs-up me-1" />
                  {likes}
                </p>
                <p>
                  <i className="fa-regular fa-thumbs-down me-1" />
                  {deslikes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`modal${id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`modal${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content px-4 pb-2">
            <div className="modal-body ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className=" position-relative">
                <button
                  onClick={() => {
                    setFavorite(!favorite);
                  }}
                  type="button"
                  className="btnNoStyle position-absolute top-0 start-0 fs-2 "
                >
                  {favorite ? (
                    <i
                      className="fa-solid fa-heart position-absolute top-0 py-1"
                      id="favoriteAd"
                      style={{ color: 'red' }}
                    />
                  ) : (
                    <i
                      className="fa-regular fa-heart position-absolute top-0 py-1"
                      id="favoriteAd"
                    />
                  )}
                </button>
                <img
                  src={img}
                  alt=""
                  style={{ height: '255px', width: '100%' }}
                  className="mx-auto d-block rounded mt-2"
                />
              </div>
              <h5 className="card-title fs-5 text-center mt-2 mb-2">{title}</h5>
              <div className="d-flex justify-content-center">
                {tags.map((tag) => (
                  <button
                    key={tag + 1}
                    type="button"
                    className="btn btn-secondary btn-sm tags fs-8"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="card-text mt-2">{description}</p>
              <div className="d-flex mt-1 gap-2 align-items-center fs-7">
                <div>
                  <img
                    src={imgAuthor}
                    className="avatar "
                    alt=""
                  />
                </div>
                <div className="fw-bold">
                  <p>
                    {nameAuthor}{' '}
                    <span>
                      {' '}
                      {verified && <i className="fa-regular fa-circle-check" />}
                    </span>
                  </p>
                  <div className="d-flex gap-3">
                    <p>
                      <i className="fa-regular fa-thumbs-up me-1" />
                      {likes}
                    </p>
                    <p>
                      <i className="fa-regular fa-thumbs-down me-1" />
                      {deslikes}
                    </p>
                  </div>
                </div>
              </div>
              <div className="fw-bold">
                <p className="card-text mt-2">
                  <i className="fa-solid fa-location-dot me-1" />
                  {location}
                </p>
                <p className="card-text mt-2">
                  <i className="fa-brands fa-whatsapp me-1 fw-bold" />
                  {contact}
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
