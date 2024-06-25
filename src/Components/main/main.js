import React from 'react'
import Rightmain from './rmain/rightmain'
import LeftMain from './lmain/leftmain'
import Middlemain from './mmain/middlemain'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './main.css'
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
import UseDarkMode from "../../Dark-mode";
import 'font-awesome/css/font-awesome.min.css'


function Main(props) {
  const [isenglish, setisenglish] = useState(true)
  const [isopen, setisopen] = useState(false)

  const handlelangeage = () => {
    setisenglish(!isenglish)
  }
  const toggleNav = () => {
    setisopen(!isopen)
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
      behavior: 'smooth'
    })
  }

  const [theme, toggleTheme] = UseDarkMode()

  return (

    <div className='fullpage'>
      {
        isenglish ?
          <nav className='navbar'
            style={{
              background: props.theme == 'dark' ? 'rgb(128, 128, 128)' : 'rgb(211, 216, 211)',
              color: props.theme == 'dark' ? 'white' : 'black'
            }}>
            <ul className={isopen ? 'navbar-links active ' : 'navbar-links'}>
              <li onClick={() => scrollToSection(home)}>Home</li>
              <li onClick={() => scrollToSection(instace)}>Projects</li>
              <li onClick={() => scrollToSection(about)}>about</li>
              <li onClick={() => scrollToSection(exprence)}>Exprence</li>
              <li onClick={() => scrollToSection(ablity)}>Skills</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>

            <div className='navbartoggle' onClick={toggleNav}>
              <i className={isopen ? 'fa fa-times time' : 'fa fa-bars'}></i>
            </div>
          </nav>

          :


          <nav className='navbar '
          style={{
            background: props.theme == 'dark' ? 'rgb(128, 128, 128)' : 'rgb(211, 216, 211)',
            color: props.theme == 'dark' ? 'white' : 'black'
          }}>
            <ul className={isopen ? 'navbar-links active ' : 'navbar-links'}  >
              <li onClick={() => scrollToSection(home)}>خانه</li>
              <li onClick={() => scrollToSection(instace)}>پروژه ها</li>
              <li onClick={() => scrollToSection(about)}>درباره</li>
              <li onClick={() => scrollToSection(exprence)}>تجارب</li>
              <li onClick={() => scrollToSection(ablity)}>مهارت ها</li>
              <li onClick={() => scrollToSection(contact)}>ارتباط</li>
            </ul>

            <div className='navbartoggle' onClick={toggleNav}>
              <i className={isopen ? 'fa fa-times time' : 'fa fa-bars'}></i>
            </div>
          </nav>

      }


      {
        isenglish ?
          <button onClick={handlelangeage} className='btn-change fa ' >فا</button>
          :
          <button onClick={handlelangeage} className=' btn-change en' >En</button>
      }

      <Container className='main' data-aos="fade-in" data-aos-delay="200" ref={home}>

        <div id='section1' onClick={() => setisopen(false)}>
          <Row>
            <Col lg={4} xl={4}>
              {isenglish ?
                <LeftMain /> :
                <Faleft />
              }
            </Col>

            <Col lg={4} xl={4} xs={12} className='mt-lg-5 pb-lg-5'>
              <Middlemain >
                {isenglish ?
                  <div className='info'>
                    <h2 className='pt-2 ms-2 ms-sm-0' style={{ textAlign: 'center' }}><b>Mohammad Owais Azizi</b></h2>
                    <p className='p-1 ms-3 ms-sm-0' >Living in Herat city, pursuing studies in Computer Sience in Herat university.
                      Should you require assistance? please feel free to contact me through any of the provided ways: <br />
                      <div className='phone mb-3 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-2 contactbtn" data-aos="fade-left" data-aos-delay="500"
                        >Contact me <FaArrowDown /></button></span>
                      </div>
                    </p>
                  </div> :

                  <div className='info'>
                    <h2 className='pt-2 ms-2 ms-sm-0' style={{ textAlign: 'center' }}><b>محمد اویس عزیزی</b></h2>
                    <p className='p-1 ms-3 ms-sm-0' >در شهر هرات زندگی میکند و در حال آموختن رشته کمپیوتر ساینس در دانشگاه هرات است. میتوانم برای شما کمک کنم ؟ اگر بلی میتوانید از راه های زیر با من تماس بگیرید <br />
                      <div className='phone mb-3 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-2 contactbtn" data-aos="fade-right" data-aos-delay="800"> <FaArrowDown /> ارتباط با من  </button></span>
                      </div>
                    </p>
                  </div>
                }
              </Middlemain>
            </Col>

            <Col lg={4} xl={4}>
              {isenglish ?
                <Rightmain />
                :
                <Faright />
              }
            </Col>
          </Row>

        </div>

      </Container>

      <div onClick={() => setisopen(false)}>
        <div ref={instace}> {isenglish ? <Instances click={props.clicked} /> : <FaInstances click={props.clicked} />}</div>
        <div ref={about}> {isenglish ? <About /> : <Faabout />}</div>
        <div ref={exprence}> {isenglish ? <Exprence /> : <FaExprence />}</div>
        <div ref={ablity}> {isenglish ? <Ablity /> : <FaAblity />}</div>
        <div ref={contact}> {isenglish ? <Contact /> : <FaContact />}</div>
      </div>
    </div>
  );
}


export default Main
