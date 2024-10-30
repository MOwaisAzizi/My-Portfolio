import React, { useState } from "react";
import './conect.css'
import { Container, } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from 'react-icons/fa'
import { memo } from "react";
import { FaArrowUp } from "react-icons/fa";

const FaContact = ({ theme, refResult, click }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [num, setNum] = useState('')
  const [Message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    if (email.trim() === '' && num.trim() === '') return alert('لطفا ورودی تماس یا ایمیل را پر کنید')
    if (Message.trim() === '') return alert('لطفا ورودی پیام را پر کنید')

    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
    setName('')
    setEmail('')
    setNum('')
    setMessage('')
    alert('اطلاعات شماارسال شد')
  }

  const style = {
    background: theme === 'dark' ? 'linear-gradient(to right,#52d3d8,#30b5b9)' : 'linear-gradient(to right,#98eecc,#82e5bd)',
    color: theme === 'dark' ? 'white' : 'black',
    boxShadow: theme === 'dark' ? '2px 3px 10px #22abaf' : '5px 5px 10px rgba(0, 0, 0,0.2)'

  }
  const style1 = {
    background: theme === 'dark' ? '#52d3d8' : '#98eecc',
    color: theme === 'dark' ? 'white' : 'black',
  }

  return (
    <div className="dhole mt-5 pb-5 faconect" style={{ direction: 'rtl' }}>
      <Container className="contain">
        <div className="form py-4" style={style}>
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h2 style={{ textAlign: 'center' }}>ارتباط با من</h2>
            <div className="f">
              <label className="pe-2">نام</label> <br />
              <input data-aos="zoom-in" data-aos-duration="1500" value={name} onChange={(e) => setName(e.target.value)} type="text" name='email-from' id="emailfrom0" placeholder="نام شما" className="input"></input> <br />
              <label className="pe-2" >ایمیل آدرس</label> <br />
              <input data-aos="zoom-in" data-aos-duration="1500" value={email} onChange={(e) => setEmail(e.target.value)} style={{ direction: 'rtl' }} type="email" name='email-from' id="emailfrom1" placeholder="ایمیل ادرس شما" className="input"></input> <br />
              <label className="pe-2" >شماره تماس</label> <br />
              <input data-aos="zoom-in" data-aos-duration="1500" value={num} onChange={(e) => setNum(e.target.value)} style={{ direction: 'rtl' }} type="number" name='email-from' id="emailfrom2" placeholder=" شماره تماس شما " className="input"></input> <br />
              <label className="pe-2" >پیام</label> <br />
              <textarea data-aos="zoom-in" data-aos-duration="1500" value={Message} onChange={(e) => setMessage(e.target.value)} style={{ direction: 'rtl' }} name='message' id="message" placeholder="پیام شما" rows={5}></textarea> <br />
              <button type="submit" className="btn btn-primary button  px-2 py-1  px-md-3 py-md-2 me-1 text-white">ارسال <FaPaperPlane color="white" /></button>
            </div>
          </form>
        </div>

        <div className="dlinks" style={{ direction: 'ltr' }}>
          <a href='https://github.com/MOwaisAzizi'>  <i className="fa fa-github github" > </i> </a>
          <a href='http://www.facebook.com/mowais.azizi'>  <i className="fa fa-facebook face" > </i> </a>
          <a href='https://t.me/EngOwais'>  <i className="fa fa-telegram telegram" > </i> </a>
          <a href='https://www.linkedin.com/in/m-owais-azizi-7440532b4'>  <i className="fa fa-linkedin linkedin" > </i> </a>
          <a href='https://wa.me/93798267860'>  <i className="fa fa-whatsapp whatsapp" > </i> </a>

          <br />
        </div>
      </Container>
      <button className='goTop fa' style={style1} onClick={click} ref={refResult}><FaArrowUp size={18} /></button>

    </div>
  );
}

export default memo(FaContact);