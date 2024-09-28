import React from "react";
import './conect.css'
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import Linkicon from "../../linkicons/linkicon";
import { FaPaperPlane } from 'react-icons/fa'

const FaContact = ({ theme, refResult, click }) => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
  }

  const style = {
    background: theme == 'dark' ? '#52d3d8' : '#98eecc',
    color: theme == 'dark' ? 'white' : 'black',
    boxShadow: theme == 'dark' ? '7px 7px 15px #22abaf' : '5px 5px 15px #49bc8e'

  }

  return (
    <div className="dhole mt-5 pb-5 faconect" style={{ direction: 'rtl' }}>
      <Container className="contain">
        <div className="form py-4" style={style}>
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h1 style={{ textAlign: 'center', color: 'black' }}>ارتباط با من</h1>
            <label className="me-lg-5 me-sm-3 me-2" >ایمیل آدرس شما</label> <br />
            <input data-aos="zoom-in" data-aos-duration="1500" className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} type="text" name='email-from' id="emailfrom" placeholder="ایمیل ادرس شما"></input> <br />
            <label className="me-lg-5 me-sm-3 me-2" >عنوان</label> <br />
            <input data-aos="zoom-in" data-aos-duration="1500" className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} type="text" name='email-from' id="emailfrom" placeholder="عنوان شما"></input> <br />
            <label className="me-lg-5 me-sm-3 me-2" >پیام شما</label> <br />
            <textarea data-aos="zoom-in" data-aos-duration="1500" className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} name='message' id="message" placeholder="پیام شما" rows={5}></textarea> <br />
            <button type="submit" className="btn btn-primary button me-lg-5 me-sm-3 me-2 px-2 py-1  px-md-3 py-md-2 text-white">ارسال <FaPaperPlane color="white" /></button>
          </form>
        </div>

        <div className="dlinks" style={{ direction: 'ltr' }}>
          <a iconlink='https://github.com/MOwaisAzizi'>  <i className="fa fa-github github" > </i> </a>
          <a href='http://www.facebook.com/mowais.azizi'>  <i className="fa fa-facebook face" > </i> </a>
          <a href='https://t.me/EngOwais'>  <i className="fa fa-telegram telegram" > </i> </a>
          <a href='https://www.linkedin.com/in/m-owais-azizi-7440532b4'>  <i className="fa fa-linkedin linkedin" > </i> </a>
          <a href='https://wa.me/93798267860'>  <i className="fa fa-whatsapp whatsapp" > </i> </a>

          <br />
        </div>
      </Container>
      <button className='goTop' style={style} onClick={click} ref={refResult}>&#11014;</button>

    </div>
  );
}

export default FaContact;