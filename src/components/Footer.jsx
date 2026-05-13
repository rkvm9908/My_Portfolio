import { Container, Row, Col } from "react-bootstrap";

import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="footer-content">
              <h3>
                Mathuprasanth{" "}<span>R K</span>
              </h3>

              <p>
                Python Full Stack Developer passionate about building modern and
                user-friendly web applications.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="footer-right">
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#skills">Skills</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <div className="footer-socials">
                <a href="https://github.com/rkvm9908">
                  <FaGithub />
                </a>

                <a href="mailto:mathuprasanth9908@email.com">
                  <FaBehance />
                </a>

                <a href="https://www.linkedin.com/in/mathuprasanth-r-k/">
                  <FaLinkedin />
                </a>

                <a href="mailto:mathuprasanth9908@email.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© 2026 Mathuprasanth R K. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
