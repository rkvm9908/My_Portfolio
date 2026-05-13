import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaBehance,
  FaCheckCircle,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

/* ─── Toast Component ─────────────────────────────────────── */
function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className={`toast-wrapper ${toast.type}`}>
      <div className="toast-icon">
        {toast.type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
      <div className="toast-body">
        <p className="toast-title">{toast.title}</p>
        <p className="toast-msg">{toast.message}</p>
      </div>
      <button className="toast-close" onClick={onClose}>
        <FaTimes />
      </button>
      {/* progress bar */}
      <div className="toast-progress" />
    </div>
  );
}

/* ─── Contact Component ───────────────────────────────────── */
function Contact() {
  const form   = useRef();
  const [toast,    setToast]    = useState(null);
  const [loading,  setLoading]  = useState(false);

  const closeToast = () => setToast(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    /* ── Inject current time so {{time}} works in EmailJS template ── */
    const timeField = form.current.querySelector('input[name="time"]');
    const now = new Date();
    const formatted = now.toLocaleString("en-IN", {
      day:    "2-digit",
      month:  "short",
      year:   "numeric",
      hour:   "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    if (timeField) timeField.value = formatted;

    emailjs
      .sendForm(
        "service_tlqeztg",
        "template_kr5v4zi",
        form.current,
        "3i971Y-KWOYu1ukth",
      )
      .then(() => {
        setToast({
          type:    "success",
          title:   "Message Sent! ✅",
          message: "Thanks for reaching out. I'll get back to you soon.",
        });
        e.target.reset();
      })
      .catch(() => {
        setToast({
          type:    "error",
          title:   "Something went wrong ❌",
          message: "Please try again or email me directly.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="contact-section">
      {/* Toast */}
      <Toast toast={toast} onClose={closeToast} />

      <Container>
        <h2 className="section-title">Contact Me</h2>

        <Row className="g-4">
          {/* ── Left: Info ── */}
          <Col lg={5}>
            <div className="contact-info" data-aos="fade-right">
              <h3>Let's Connect</h3>
              <p>
                I'm open to internships, freelance work, and full-time
                opportunities related to Full Stack Development.
              </p>

              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  text: "mathuprasanth9908@gmail.com",
                  href: "mailto:mathuprasanth9908@gmail.com",
                },
                {
                  icon: <FaPhoneAlt />,
                  label: "Phone",
                  text: "+91 6380689908",
                  href: "tel:+916380689908",
                },
                {
                  icon: <FaGithub />,
                  label: "GitHub",
                  text: "github.com/rkvm9908",
                  href: "https://github.com/rkvm9908",
                },
                {
                  icon: <FaBehance />,
                  label: "Behance",
                  text: "behance.net/RKVM",
                  href: "https://www.behance.net/RKVM",
                },
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  text: "linkedin.com/in/mathuprasanth-r-k",
                  href: "https://www.linkedin.com/in/mathuprasanth-r-k/",
                },
              ].map(({ icon, label, text, href }) => (
                <Card className="contact-card" key={label}>
                  <Card.Body>
                    <div className="contact-icon">{icon}</div>
                    <div>
                      <h5>{label}</h5>
                      {href ? (
                        <a href={href} target="_blank" rel="noreferrer">
                          <span>{text}</span>
                        </a>
                      ) : (
                        <span>{text}</span>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          {/* ── Right: Form ── */}
          <Col lg={7}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Body>
                <Form onSubmit={sendEmail} ref={form}>

                  {/* Hidden time field — auto-filled before send */}
                  <input type="hidden" name="time" />

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="from_name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="from_email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Your Message"
                      name="message"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="custom-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner" /> Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;