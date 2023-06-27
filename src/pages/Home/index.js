import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Fact from "../../components/Fact";
import Services from "../../components/Services";
import Team from "../../components/Team";

export default function index() {
  return (
    <>
      <Hero />
      <About />
      <Fact />
      <Services />
      <Team />

      {/* Back to top button */}
      <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
