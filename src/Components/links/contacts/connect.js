import React, { useState } from "react";
import './conect.css'
import { Container } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = ({ theme, click, refResult }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [num, setNum] = useState('')
  const [Message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    if(email.trim() === '' && num.trim()==='') return alert('Please fill the email or number input')
    if (Message.trim() === '') return alert('Please fill the message input')

    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
    setName('')
    setEmail('')
    setNum('')
    setMessage('')
    alert('Your Data Sended')
  }


  const style = {
    background: theme === 'dark' ? 'linear-gradient(to left,#52d3d8,#30b5b9)' : 'linear-gradient(to left,#98eecc,#82e5bd)',
    color: theme === 'dark' ? 'white' : 'black',
    boxShadow: theme === 'dark' ? '2px 3px 10px #22abaf' : '5px 6px 15px rgba(0, 0, 0,0.2)'
  }
  const style1 = {
    background: theme === 'dark' ? '#52d3d8' : '#98eecc',
    color: theme === 'dark' ? 'white' : 'black',
  }

  return (
    <div className="dhole mt-5 pb-5">
      <Container className="contain">
        <div className="form py-4" style={style}>
          <form id="contact-form" onSubmit={sendEmail} method="POST">
            <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
            <div className="f mt-2">
            <label >Name</label> <br />
            <input data-aos="zoom-in" data-aos-duration="1500" value={name} onChange={(e) => setName(e.target.value)} type="text" name='email-from' id="emailfrom0" placeholder="Your Name" className="input"></input> <br />
              <label >Email Address</label> <br />
              <input data-aos="zoom-in" data-aos-duration="1500" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email-from' id="emailfrom1" placeholder="Your Email Address" className="input"></input> <br />
              <label >Phone No</label> <br />
              <input data-aos="zoom-in" data-aos-duration="1500" value={num} onChange={(e) => setNum(e.target.value)} type="number" name='email-from' id="emailfrom2" placeholder="Your Phone Number" className="input"></input> <br />
              <label >Message</label> <br />
              <textarea data-aos="zoom-in" data-aos-duration="1500" value={Message} onChange={(e) => setMessage(e.target.value)} name='message' id="message" placeholder="Your Message" rows={5}></textarea> <br />
              <button type="submit" className="btn btn-primary  ms-1 button px-2 py-1  px-md-3 py-md-2 text-white">Send <FaPaperPlane color="white" className="me-2 me-sm-0" /></button>

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