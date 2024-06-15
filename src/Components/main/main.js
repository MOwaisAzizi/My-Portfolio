import React from 'react'
import Rightmain from './rmain/rightmain'
import LeftMain from './lmain/leftmain'
import Middlemain from './mmain/middlemain'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './main.css'
import {Nav} from 'react-bootstrap';
import Instances from './mmain/instances/instaces'
import About from '../links/about/about';
import Exprence from '../links/exprence/exprence';
import Ablity from '../links/ablity/ablity';
import Contact from '../links/contacts/connect';
import { useRef, useState } from 'react';
import Faright from './rmain/FAright';
import Faleft from './lmain/Faleft';
import FaInstances from './mmain/instances/Fainstances';
import FaAblity from '../links/ablity/Faability';
import FaContact from '../links/contacts/Facontact';
import Faabout from '../links/about/Faabout';
import FaExprence from '../links/exprence/Faexprence';
import { FaArrowDown } from 'react-icons/fa';



function Main(props) {
  const [isenglish, setisenglish] = useState(true)

  const handlelangeage = (props) => {
    setisenglish(!isenglish)
  }

  const home = useRef(null);
  const about = useRef(null);
  const exprence = useRef(null);
  const instace = useRef(null);
  const contact = useRef(null);
  const ablity = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'

    })
  }

  return (

    <div className='fullpage'>
      {
        isenglish ?
          
            <nav className='navbar'>
                    <Nav className='nav-item ul ulENG me-2 ms-md-5  '>
                      <li className='nav-item ps-lg-5 ps-md-0  ps-1  nav-links ' onClick={() => scrollToSection(home)}>Home</li>
                      <li className='nav-item ps-md-5 ps-sm-4  ps-2 nav-links ' onClick={() => scrollToSection(instace)}>Projects</li>
                      <li className=' nav-item ps-md-5 ps-sm-4 ps-2  nav-links' onClick={() => scrollToSection(about)}>about</li>
                      <li className=' nav-item ps-md-5 ps-sm-4 ps-2 nav-links' onClick={() => scrollToSection(exprence)}>Exprence</li>
                      <li className='nav-item ps-md-5 ps-sm-4 ps-2 nav-links ' onClick={() => scrollToSection(ablity)}>Skills</li>
                      <li className='nav-item ps-md-5 ps-sm-4 ps-xs-0 contact nav-links' onClick={() => scrollToSection(contact)}>Contact</li>
                    </Nav>
            </nav>
          
           :

          
            <nav className='navbar'>
            <Container>
            <Nav className='ul nav-item text-info ms-sm-5 ps-md-5' style={{ direction: 'rtl' }}>
                 <li className='nav-item ps-lg-5 ps-md-5 ps-sm-4 pe-1 ps-3  nav-links ' onClick={() => scrollToSection(home)}>خانه</li>
                      <li className='nav-item ps-md-5 ps-sm-4  ps-3 nav-links ' onClick={() => scrollToSection(instace)}>پروژه ها</li>
                      <li className=' nav-item ps-md-5 ps-sm-4 ps-3  nav-links' onClick={() => scrollToSection(about)}>درباره</li>
                      <li className=' nav-item ps-md-5 ps-sm-4 ps-3 nav-links' onClick={() => scrollToSection(exprence)}>تجربه</li>
                      <li className='nav-item ps-md-5 ps-sm-4 ps-3 nav-links ' onClick={() => scrollToSection(ablity)}>مهارتها</li>
                      <li className='nav-item ps-md-5 ps-sm-4 ps-xs-0 contact nav-links' onClick={() => scrollToSection(contact)}>ارتباط</li>
                    </Nav>
            </Container>
            </nav>
          
      }


      <Container className='main' data-aos="fade-in" data-aos-delay="200" ref={home}>

        <div id='section1'>
          {
            isenglish ?
              <button onClick={handlelangeage} className='btn-change px-2'>فا</button>
              :
              <button onClick={handlelangeage} className=' btn-change px-1'>En</button>
          }



          <Row>
            <Col lg={4} xl={4} className='mt-lg-5'>
              {isenglish ?


                <LeftMain /> :
                <Faleft />
              }
            </Col>

            <Col lg={4} xl={4} xs={12} className='mt-lg-5 pb-lg-5'>
              <Middlemain >
                {isenglish ?
                  <div className='info'>
                    <h2 className='pt-2'  style={{textAlign:'center'}}><b>Mohammad Owais Azizi</b></h2>
                    <p className='p-1' >Living in Herat city,<br />studing Computer Sience in Herat university.
                      can i help you ? if yes you can contact me all this ways: <br />
                      <div className='phone mb-3 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-2 contactbtn" data-aos="fade-left" data-aos-delay="800"
                        >Contact me <FaArrowDown/></button></span>
                      </div>
                    </p>
                  </div> :

                  <div className='info'>
                    <h2 className='pt-2'  style={{textAlign:'center'}}><b>محمد اویس عزیزی</b></h2>
                    <p className='p-1' >در شهر هرات زندگی میکند و در حال آموختن رشته کمپیوتر ساینس در دانشگاه هرات است. میتوانم برای شما کمک کنم ؟ اگر بلی میتوانید از راه های زیر با من تماس بگیرید <br />
                      <div className='phone mb-3 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-2 contactbtn" data-aos="fade-right" data-aos-delay="800"> <FaArrowDown/> ارتباط با من  </button></span>
                      </div>
                    </p>
                  </div>
                }
              </Middlemain>
            </Col>

            <Col lg={4} xl={4} className='mt-lg-5'>
              {isenglish ?
                <Rightmain />
                :
                <Faright />
              }
            </Col>
          </Row>
        </div>

      </Container>

      <div ref={instace}> {isenglish ? <Instances click={props.clicked} /> : <FaInstances click={props.clicked} />}</div>
      <div ref={about}> {isenglish ? <About /> : <Faabout />}</div>
      <div ref={exprence}> {isenglish ? <Exprence /> : <FaExprence />}</div>
      <div ref={ablity}> {isenglish ? <Ablity /> : <FaAblity />}</div>
      <div ref={contact}> {isenglish ? <Contact /> : <FaContact />}</div>
    </div>
  );
}


export default Main
