import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const [formDetails, setFormData] = useState({
    firstName: '',
    lastname: '',
    email: '',
    message: '', 
    phone: ''
  });

  // const [status, setStatus] = useState({
  //   message: '',
  //   success: true
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="contact" id="contact">
        <Container> 
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="contact-image"/>
                </Col> 
                <Col md={6}> 
                <h2>Get In Touch</h2> 
                <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className='px-1'>                        
                      <input 
                        type="text" 
                        name="firstName"
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={handleInputChange} 
                        />
                      </Col>
                      <Col sm={6} className='px-1'>                        
                      <input 
                        type="text" 
                        name="firstName"
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={handleInputChange} 
                        />
                      </Col>
                    </Row>
                </form>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Contact;
