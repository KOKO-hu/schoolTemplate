import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark stroke">
          <h1>
            <a className="navbar-brand" href="index.html">
              <i className="fas fa-chalkboard-teacher"></i> Edukator
            </a>
          </h1>

          <button
            className="navbar-toggler  collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item mr-lg-1">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="header-search mr-lg-2 mt-lg-0 mt-4 position-relative">
                <div className="search-right">
                  <a
                    href="#search"
                    className="btn btn-style search-btn"
                    title="search"
                  >
                    <span
                      className="fas fa-search mr-2"
                      aria-hidden="true"
                    ></span>
                    Search
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container py-1">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};
