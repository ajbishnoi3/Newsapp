import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  let myStyle, icon, navType;
  if (props.mode === "light") {
    navType = "danger";
    myStyle = {
      color: "white",
      fontSize: "1.5rem",
    };
    icon = "bi bi-moon-stars-fill";
  } else {
    navType = "dark";
    myStyle = {
      color: "yellow",
      fontSize: "1.5rem",
    };
    icon = "bi bi-brightness-high-fill";
  }
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-md navbar-dark bg-${navType}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Newsapp
          </Link>
          <i
            style={myStyle}
            onClick={props.toggleMode}
            className={`${icon} navbar-toggler noborder`}
          ></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="technology">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
            </ul>
            <div className="d-flex me-4">
              <i
                style={myStyle}
                onClick={props.toggleMode}
                className={`${icon} nolongborder`}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
