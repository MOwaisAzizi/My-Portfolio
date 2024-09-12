import React from "react";
import './conect.css'
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import Linkicon from "../../linkicons/linkicon";
import { FaPaperPlane } from 'react-icons/fa'

const FaContact = ({theme}) => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
  }

  const style = {
    background: theme=='dark' ? 'linear-gradient(to right, rgb(128, 128, 128), rgb(107, 107, 107))' :'linear-gradient(to right, rgb(211, 216, 211) , rgb(181, 189, 181))',
    color: theme == 'dark' ? 'white' : 'black'
  }

  return (
    <div className="dhole mt-5 pb-5 faconect" style={{ direction: 'rtl' }}>
      <Container className="contain">
        <div className="form" style={style}>
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h1 style={{ textAlign: 'center', color: 'black' }}>ارتباط با من</h1>
            <label className="me-lg-5 me-sm-3 me-2" >ایمیل آدرس شما</label> <br />
            <input className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} type="text" name='email-from' id="emailfrom" placeholder="ایمیل ادرس شما"></input> <br />
            <label className="me-lg-5 me-sm-3 me-2" >عنوان</label> <br />
            <input className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} type="text" name='email-from' id="emailfrom" placeholder="عنوان شما"></input> <br />
            <label className="me-lg-5 me-sm-3 me-2" >پیام شما</label> <br />
            <textarea className="me-lg-5 me-sm-3 me-2" style={{ direction: 'rtl' }} name='message' id="message" placeholder="پیام شما" rows={5}></textarea> <br />
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
    </div>
  );
}

export default FaContact;