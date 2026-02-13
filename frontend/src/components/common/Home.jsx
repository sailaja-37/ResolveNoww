import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image1 from "../../Images/Image1.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "./FooterC";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="brand-logo">
            ResolveNow
          </Navbar.Brand>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link text-light">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link text-light">
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <div className="hero-section">
        <Container className="hero-container">
          <div className="hero-left">
            <h1>
              Smart Complaint <br /> Management System
            </h1>
            <p>
              Register, track and resolve complaints efficiently with
              real-time updates and seamless communication.
            </p>

            <Link to={"/Login"}>
              <Button className="hero-btn">
                Get Started 🚀
              </Button>
            </Link>
          </div>

          <div className="hero-right">
            <img src={Image1} alt="complaint-system" />
          </div>
        </Container>
      </div>

      {/* FEATURES SECTION */}
      <div className="features-section">
        <Container className="features-container">
          <div className="feature-card">
            <h4>Easy Complaint Submission</h4>
            <p>Submit complaints with full details and track status live.</p>
          </div>

          <div className="feature-card">
            <h4>Real-Time Interaction</h4>
            <p>Chat directly with assigned agents for faster resolution.</p>
          </div>

          <div className="feature-card">
            <h4>Smart Assignment</h4>
            <p>Admin assigns complaints efficiently based on workload.</p>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Home;
