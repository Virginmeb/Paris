import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

export default function index() {
  return (
    <>
      <Social />
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <i className="fa fa-building text-primary me-3"></i>JAWA
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-3 py-lg-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Our Services
            </Link>

            <Link to="/contact" className="nav-item nav-link">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
