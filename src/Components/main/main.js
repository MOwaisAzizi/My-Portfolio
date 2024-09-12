import React from 'react'
import Rightmain from './rmain/rightmain'
import LeftMain from './lmain/leftmain'
import Middlemain from './mmain/middlemain'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
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
import { FaArrowDown, FaFontAwesome } from 'react-icons/fa';
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
  const style = {
    height:'auto'
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

  return (
//#f3f3f3   rgb(211, 216, 211) rgb(128, 128, 128) rgb(171, 171, 171)

    <div className='fullpage'>
      {
        isenglish ?
          <nav className='navbar'
            style={{
              background: props.theme == 'dark' ? 'linear-gradient(to right, rgb(128, 128, 128), rgb(107, 107, 107))' : 'linear-gradient(to right, rgb(211, 216, 211) , rgb(181, 189, 181))',
              color: props.theme == 'dark' ? 'white' : 'black',
              height: isopen ? 'auto' : '57px'
            }}>
            <ul className={isopen ? 'navbar-links active ' : 'navbar-links'}>
              <li onClick={() => scrollToSection(home)}>Home</li>
              <li onClick={() => scrollToSection(instace)}>Projects</li>
              <li onClick={() => scrollToSection(about)}>about</li>
              <li onClick={() => scrollToSection(exprence)}>Exprence</li>
              <li onClick={() => scrollToSection(ablity)}>Skills</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>

          {/* <Navbar.Brand ref={home} onClick={() => scrollToSection(home)} className=" fw-bold logo">
              Azizi
               </Navbar.Brand> */}
            
            {/* <div className='navbartoggle' onClick={toggleNav} > */}
            <i onClick={toggleNav} className={isopen ? 'fa fa-times time navbartoggle' : 'fa fa-bars navbartoggle'}></i>

            {/* </div> */}
          </nav>
          
          :

          <nav className=' faNavbar faMain '
            style={{
              background: props.theme == 'dark' ? 'linear-gradient(to right, rgb(128, 128, 128), rgb(107, 107, 107))' : 'linear-gradient(to right, rgb(211, 216, 211) , rgb(181, 189, 181))',
              color: props.theme == 'dark' ? 'white' : 'black',
              height: isopen ? 'auto' : '57px'

            }}>
            <ul className={isopen ? 'navbar-links active ' : 'navbar-links Navfarsi'}  >
              <li onClick={() => scrollToSection(home)}>خانه</li>
              <li onClick={() => scrollToSection(instace)}>پروژه ها</li>
              <li onClick={() => scrollToSection(about)}>درباره</li>
              <li onClick={() => scrollToSection(exprence)}>تجارب</li>
              <li onClick={() => scrollToSection(ablity)}>مهارت ها</li>
              <li onClick={() => scrollToSection(contact)}>ارتباط</li>
            </ul>

        {/* <Navbar.Brand ref={home} onClick={() => scrollToSection(home)} className=" fw-bold logoFa">
              عزیزی
               </Navbar.Brand> */}
         
            {/* <div className='navbartoggle' onClick={toggleNav}> */}
              <i onClick={toggleNav} className={isopen ? 'fa fa-times timef navbartogglef' : 'fa fa-bars navbartogglef'}></i>
            {/* </div> */}
          </nav>

      }


      {
        isenglish ?
          <button onClick={handlelangeage} className='btn-change fa ' >فا</button>
          :
          <button onClick={handlelangeage} className=' btn-change en' >En</button>
      }


      <Container className='main' ref={home}>

        <div id='#' onClick={() => setisopen(false)}>
          <Row >
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
                    <h2 className='pt-2 ms-3 ms-sm-0' style={{ textAlign: 'center' }}><b>Mohammad Owais Azizi</b></h2>
                    <p className='p-1 ms-4 ms-sm-0' >Living in Herat city, pursuing studies in Computer Sience in Herat university.
                      Should you require assistance? please feel free to contact me through any of the provided ways: <br />
                      <div className='phone mb-1 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-3 contactbtn px-3 py-2" data-aos="fade-left" data-aos-delay="500"
                        >Contact Me <FaArrowDown /></button></span>
                      </div>
                    </p>
                  </div> :

                  <div className='info faMain'>
                    <h2 className='pt-2 ms-2 ms-sm-0' style={{ textAlign: 'center' }}><b>محمد اویس عزیزی</b></h2>
                    <p className='p-1 ms-3 ms-sm-0 ' >در شهر هرات زندگی میکند و در حال آموختن رشته کمپیوتر ساینس در دانشگاه هرات است.آیا به کمک ضرورت دارید ؟ اگر بلی میتوانید از راه های زیر با من تماس بگیرید <br />
                      <div className='phone mb-4 mb-md-0' >
                        <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-3 contactbtn px-3 py-2" data-aos="fade-right" data-aos-delay="800"> <FaArrowDown /> ارتباط با من  </button></span>
                     
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
        <div ref={instace}> {isenglish ?
          <Instances click={props.clicked} /> : <FaInstances click={props.clicked} />}</div>
        <div ref={about}> {isenglish ? <About /> : <Faabout />}</div>
        <div ref={exprence}> {isenglish ? <Exprence /> : <FaExprence />}</div>
        <div ref={ablity}> {isenglish ? <Ablity /> : <FaAblity />}</div>
        <div ref={contact}> {isenglish ? <Contact theme = {props.theme} click = {()=>scrollToSection(home)} refResult={home}/> : <FaContact theme = {props.theme} click = {()=>scrollToSection(home)} refResult={home} />}</div>
      </div>
    </div>
  );
}


export default Main
