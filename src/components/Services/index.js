import React, { useEffect, useState } from "react";

export default function Index() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:3004/services");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Services</h6>
              <h1 className="display-6 mb-0">
                Construction And Renovation Solutions
              </h1>
            </div>
          </div>
          <div
            className="col-lg-6 text-lg-end wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <a className="btn btn-primary py-3 px-5" href="/">
              More Services
            </a>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
              key={service.id}
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img
                  className="img-fluid"
                  src={service.image}
                  alt={service.title}
                />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                  <a className="small" href="/">
                    READ MORE<i className="fa fa-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
