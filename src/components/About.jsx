import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">About Me</h2>

        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-content" data-aos="fade-right">
              <h3>Full Stack Developer & IT Postgraduate</h3>

              <p>
                I am Mathuprasanth R K, a passionate Python Full Stack Developer currently
                pursuing M.Sc Information Technology. I enjoy building modern,
                responsive, and user-friendly web applications.
              </p>

              <p>
                I have experience working with Flask, Django, SQLite3, JavaScript, and Bootstrap. My goal is to become a
                professional Full Stack Developer and contribute to real-world
                software projects.
              </p>

              <p>
                I am continuously learning new technologies and improving my
                problem-solving and development skills.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <Row data-aos="fade-left">
              <Col md={6} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <h4>Education</h4>

                    <p>M.Sc Information Technology</p>

                    <span>Government Arts College, Coimbatore</span>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <h4>Experience</h4>

                    <p>Python Full Stack Development</p>

                    <span>Academic Projects & Hands-on Projects</span>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <h4>Projects</h4>

                    <p>Full Stack Web Applications</p>

                    <span>Flask & Django Projects</span>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="mb-4">
                <Card className="about-card">
                  <Card.Body>
                    <h4>Career Goal</h4>

                    <p>Become a Professional Developer</p>

                    <span>Full Stack Engineer</span>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
