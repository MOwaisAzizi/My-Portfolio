import React from "react";
import './conect.css'
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import Linkicon from "../../linkicons/linkicon";
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')

  }
  return (
    <div className="dhole mt-5 pb-5">
      <Container className="contain">
        <div className="form">
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h1 style={{ textAlign: 'center', color: 'black' }}>Contact Me</h1>
            <label >Your Email Address:</label> <br />
            <input type="text" name='email-from' id="emailfrom" placeholder="your Email Address" className="input"></input> <br />
            <label >Content:</label> <br />
            <input type="text" name='email-from' id="emailfrom" placeholder="your Content"></input> <br />
            <label >Message:</label> <br />
            <textarea name='message' id="message" placeholder="your Message" rows={5}></textarea> <br />
            <button type="submit" className="btn btn-primary button px-2 py-1  px-md-3 py-md-2 text-white">Send <FaPaperPlane color="white" className="me-2 me-sm-0" /></button>
          </form>
        </div>

        <div className="dlinks" >

          <Linkicon iconlink='https://github.com/MOwaisAzizi'>  <i className="fa fa-github" > </i> </Linkicon>
          <Linkicon iconlink='http://www.facebook.com/mowais.azizi'>  <i className="fa fa-facebook" > </i> </Linkicon>
          <Linkicon iconlink='https://wa.me/93798267860'>  <i className="fa fa-whatsapp" > </i> </Linkicon>
          <Linkicon iconlink='https://t.me/EngOwais'>  <i className="fa fa-telegram" > </i> </Linkicon>
          <Linkicon iconlink='https://www.linkedin.com/in/m-owais-azizi-7440532b4'>  <i className="fa fa-linkedin" > </i> </Linkicon>
          <br />
        </div>

      </Container>
    </div>
  );
}

export default Contact;