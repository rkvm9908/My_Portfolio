import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt,FaArrowRight } from "react-icons/fa";

import "../styles/project.css";

import phishing from "../assets/images/phishing.png";
import joboffer from "../assets/images/joboffer.png";
import kovaiworks from "../assets/images/kovaiworks.jpg";
const VIEW_ALL_URL = "https://showcase-bay-nine.vercel.app";
const projects = [
  {
    title: "Phishing URL Detection",

    image: phishing,

    description:
      "Phishing URL classifier using a Voting Classifier fusing Random Forest and XGBoost. Engineered 45+ URL-based features; improved model robustness through hyperparameter tuning and k-fold cross-validation.",

    technologies: ["Python","XGBoost","Random Forest","scikit-learn","Ensemble"],

    gitHubLink: "https://github.com/rkvm9908/Python_projects/tree/9e49ad831ce7cc55b5b201b33e33b5b49d888d96/Phishing%20URL%20Detecion",

    websiteLink: "https://smart-phishing-guard-2.onrender.com",
  },
  {
    title: "Fake Job & Scholarship Detector",

    image: joboffer,

    description:
      "Flask web app that detects fake job and scholarship offers in real-time using an adaptive multi-model ML pipeline with TF-IDF vectorization. Integrated Google Gemini LLM to auto-generate AI-powered explanations and surface critical red flags for flagged results.",

    technologies: ["Python","Flask","TF-IDF","Gemini LLM","scikit-learn"],

    gitHubLink: "https://github.com/rkvm9908/Python_projects/tree/9e49ad831ce7cc55b5b201b33e33b5b49d888d96/Fake%20Scholarship%20or%20Job%20Offer%20Detection",
  },

  {
    title: "KovaiWorks real-time hyperlocal gig platform",

    image: kovaiworks,

    description:
      "KovaiWorks is a real-time hyperlocal gig platform that connects Coimbatore-based industries, factories, and event organisers with daily wage workers. It features OTP authentication, bilingual support, live worker tracking, job requests, real-time chat, and simulated UPI payments, providing a seamless platform for local employment opportunities.",

    technologies: ["Flutter","Firebase","Flutter Maps","Dart","REST API","Cloud Firestore", "geolocator"],

    gitHubLink: "https://github.com/rkvm9908/kovaiworks.git",

    websiteLink: "https://kovaiworks.web.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">My Projects</h2>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="project-card" data-aos="fade-up">
                <div className="project-image">
                  {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="img-fluid project-img-actual" 
                          />
                        ) : (
                          <div className="image-placeholder">No Image Available</div>
                        )}
                </div>

                <Card.Body>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <Badge bg="primary" key={i}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <div>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="project-btn" >
                          <FaGithub />
                          GitHub
                        </Button>
                      </a>
                    </div>

                    {project.websiteLink && (
                    <div>
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline-light" className="project-btn">
                          <FaExternalLinkAlt />
                          Demo
                        </Button>
                      </a>
                    </div> )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="vab-wrapper">
      <a
        href={VIEW_ALL_URL}
        target="_blank"
        rel="noreferrer"
        className="vab-btn"
      >
        <span className="vab-label">View All Projects &amp; Certificates</span>
 
        <span className="vab-icon-wrap">
          <FaArrowRight className="vab-arrow" />
          <FaExternalLinkAlt className="vab-ext" />
        </span>
      </a>
    </div>
    </section>
  );
}

export default Projects;
