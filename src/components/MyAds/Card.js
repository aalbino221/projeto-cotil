/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */

export default function Card({ adInfo }) {
  const { img, title, tags, description, location, price } = adInfo;
  return (
    <div className="card mb-3 cards">
      <div className="row no-gutters">
        <div className="d-flex col-md-5 align-items-center px-0">
          <img
            src={img}
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
            <h5 className="card-title">{title}</h5>
            <p className="card-text fs-7">{description}</p>
            {tags.map((tag) => (
              <button
                key={tag + 1}
                type="button"
                className="btn btn-secondary btn-sm tags fs-8"
              >
                {tag}
              </button>
            ))}
            <p className="card-text mt-2 fs-7">
              <i className="fa-solid fa-location-dot mx-1" />
              {location}
            </p>
            <p className="card-text mt-2 fs-7">
              <i className="fa-solid fa-brazilian-real-sign mx-1" />
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
