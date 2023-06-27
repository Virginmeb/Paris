import React from "react";

export default function index() {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/carousel-1.jpg" alt="gambar" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      Welcome to JAWA
                    </h5>
                    <h1 className="display-2 text-light mb-3 animated slideInDown">
                      A Construction & Renovation Company
                    </h1>
                    <ol className="breadcrumb mb-4 pb-2">
                      <li className="breadcrumb-item fs-5 text-light">
                        Commercial
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        Residential
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        Industrial
                      </li>
                    </ol>
                    <a href="/" className="btn btn-primary py-3 px-5">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="gambar" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      Welcome to JAWA
                    </h5>
                    <h1 className="display-2 text-light mb-3 animated slideInDown">
                      Professional Tiling & Painting Services
                    </h1>
                    <ol className="breadcrumb mb-4 pb-2">
                      <li className="breadcrumb-item fs-5 text-light">
                        Commercial
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        Residential
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        Industrial
                      </li>
                    </ol>
                    <a href="/" className="btn btn-primary py-3 px-5">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
