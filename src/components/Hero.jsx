import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import "../styles/hero.css";
import profileImage from "../assets/images/profile_pic.png";
import resumeFile from '../assets/resume/MATHUPRASANTH_R_K_RESUME.pdf';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content" data-aos="fade-right">
              <p className="hero-subtitle">Hello, I'm</p>

              <h1 className="hero-title">Mathuprasanth R K</h1>

              <h2 className="hero-role">Python Full Stack Developer</h2>

              <p className="hero-description">
                Passionate Python Developer focused on building responsive,
                scalable, and user-friendly web applications using modern
                technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects">
                  <Button className="custom-btn">View Projects</Button>
                </a>

                <a href={resumeFile} download="MATHUPRASANTH_R_K_RESUME.pdf">
                  <Button className="resume-btn">Download Resume</Button>
                </a>
              </div>

              <div className="social-icons">
                <a href="https://github.com/rkvm9908">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/mathuprasanth-r-k/">
                  <FaLinkedin />
                </a>

                <a href="https://www.behance.net/RKVM">
                  <FaBehance />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6}>
               <div className="hero-right">
 
          {/* Pop-out portrait */}
          <div className="portrait-wrapper">
            {/* Gradient circle */}
            <div className="portrait-circle" />
 
            {/* Photo — overflows the circle top = pop-out effect */}
            <div className="portrait-img-wrap">
              <img
                src={profileImage}
                alt="Mathuprasanth R K"
                className="portrait-img"
              />
            </div>
          </div>
 
          {/* Stat card */}
 
        </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
