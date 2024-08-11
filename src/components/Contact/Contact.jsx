import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import contactImg from "../../assets/images/contact-img.svg";
import "./Contact.css";

const Contact = () => {
  const [formDetails, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    let formIsValid = true;

    if (!formDetails.firstName.trim()) {
      formIsValid = false;
      errors.firstName = "Please enter your first name";
    }

    if (!formDetails.lastName.trim()) {
      formIsValid = false;
      errors.lastName = "Please enter your last name";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!formDetails.email.trim()) {
      formIsValid = false;
      errors.email = "Please enter your email";
    } else if (!emailRegex.test(formDetails.email)) {
      formIsValid = false;
      errors.email = "Please enter a valid email address";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Optionally handle success or error responses
      console.log("Form submitted successfully!", formDetails);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: '',
      });
    } else {
      console.log("Form validation failed!", formErrors);
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact-image" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form
              onSubmit={handleSubmit}
              data-netlify="true"
              name="contact"
              method="post"
              data-netlify-honeypot="bot-field" // adds honeypot field for spam protection
            >
              <input type="hidden" name="form-name" value="contact" />
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={handleInputChange}
                    className={formErrors.firstName ? "is-invalid" : ""}
                  />
                  {formErrors.firstName && (
                    <span className="error">{formErrors.firstName}</span>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    className={formErrors.lastName ? "is-invalid" : ""}
                  />
                  {formErrors.lastName && (
                    <span className="error">{formErrors.lastName}</span>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={handleInputChange}
                    className={formErrors.email ? "is-invalid" : ""}
                  />
                  {formErrors.email && (
                    <span className="error">{formErrors.email}</span>
                  )}
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={handleInputChange}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={handleInputChange}
                    rows="4"
                  />
                </Col>
              </Row>
              <Button type="submit">Submit</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
