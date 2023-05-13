import React from "react";
export default function Newsitem(props) {
  let { title, description, imageUrl, newUrl, author, date, source, mode } =
    props;
  return (
    <>
      <div className="container my-3">
        <div
          className={`card bg-${mode} text-${
            props.mode === "light" ? "Dark" : "light"
          }`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="
          badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <a href={newUrl} rel="noreferrer" target="_blank">
            <img
              className="card-img-top"
              src={
                !imageUrl ? "https://images.wsj.net/im-773594/social" : imageUrl
              }
              alt="nothing"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p
              className={`card-text text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
            >
              <small className="fw-light">
                - By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newUrl} className="btn btn-danger">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
