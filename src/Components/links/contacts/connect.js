import React from "react";
import './conect.css'
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = ({ theme, click, refResult }) => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
  }

  const style = {
    background: theme == 'dark' ? '#52d3d8' : '#98eecc',
    color: theme == 'dark' ? 'white' : 'black',
    boxShadow: theme == 'dark' ? '5px 5px 15px #22abaf' : '5px 6px 15px rgba(0, 0, 0,0.2)'
  }
  const style1 = {
    background: theme == 'dark' ? '#52d3d8' : '#98eecc',
    color: theme == 'dark' ? 'white' : 'black',
  }

  return (
    <div className="dhole mt-5 pb-5">
      <Container className="contain">
        <div className="form py-4" style={style}>
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
          <div className="f mt-2">
          <label >Your Email Address</label> <br />
            <input data-aos="zoom-in" data-aos-duration="1500"  type="text" name='email-from' id="emailfrom1" placeholder="Email Address" className="input"></input> <br />
            <label >Content</label> <br />
            <input data-aos="zoom-in" data-aos-duration="1500" type="text" name='email-from' id="emailfrom2" placeholder="Your Content"></input> <br />
            <label >Message</label> <br />
            <textarea data-aos="zoom-in" data-aos-duration="1500" name='message' id="message" placeholder="Your Message" rows={5}></textarea> <br />
            <button type="submit" className="btn btn-primary button px-2 py-1  px-md-3 py-md-2 text-white">Send <FaPaperPlane color="white" className="me-2 me-sm-0" /></button>
         
          </div>
          </form>
        </div>

        <div className="dlinks" >
          <a href='https://github.com/MOwaisAzizi'>  <i className="fa fa-github github" > </i> </a>
          <a href='http://www.facebook.com/mowais.azizi'>  <i className="fa fa-facebook face" > </i> </a>
          <a href='https://t.me/EngOwais'>  <i className="fa fa-telegram telegram" > </i> </a>
          <a href='https://www.linkedin.com/in/m-owais-azizi-7440532b4'>  <i className="fa fa-linkedin linkedin" > </i> </a>
          <a href='https://wa.me/93798267860'>  <i className="fa fa-whatsapp whatsapp" > </i> </a>
          <br />
        </div>

      </Container>
      <button className='goTop' style={style1} onClick={click} ref={refResult}>&#11014;</button>

    </div>
  );
}

export default Contact;