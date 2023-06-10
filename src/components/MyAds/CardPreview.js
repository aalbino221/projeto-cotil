/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
export default function CardPreview({ adInfo }) {
  const {
    img,
    title,
    tags,
    description,
    location,
    imgAuthor,
    nameAuthor,
    verified,
    likes,
    deslikes,
    contact,
  } = adInfo;

  return (
    <div className="w-65 border px-5 py-3 mb-3">
      <div className=" position-relative">
        <img
          src={img}
          alt=""
          style={{ height: '220px', width: '90%' }}
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
    </div>
  );
}
