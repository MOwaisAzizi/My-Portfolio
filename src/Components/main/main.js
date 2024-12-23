import { React, useRef, useState, useEffect, memo } from 'react'
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
import Faright from './rmain/FAright';
import Faleft from './lmain/Faleft';
import FaInstances from './mmain/instances/Fainstances';
import FaAblity from '../links/ablity/Faability';
import FaContact from '../links/contacts/Facontact';
import Faabout from '../links/about/Faabout';
import FaExprence from '../links/exprence/Faexprence';
import { FaArrowDown } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css'


function Main({ theme }) {
  const [isenglish, setisenglish] = useState(true)
  const [isopen, setisopen] = useState(false)

  const handlelangeage = function ()  {
    if (isenglish === true) {
      window.localStorage.setItem('isenglish', 'true')
      setisenglish(false)
    } else if (isenglish === false) {
      window.localStorage.setItem('isenglish', 'false')
      setisenglish(true)
    }
  }

  useEffect(() => {    
    const localtheme = window.localStorage.getItem('isenglish')
    if (localtheme === 'true') {
      setisenglish(false)
    }
    if (localtheme === 'false') {
      setisenglish(true)
    }
  }, [])


  const toggleNav = function () {    
    setisopen(!isopen)
  }
  

  const style2 = {
      background: theme === 'dark' ? '#52d3d8' : '#98eecc',
      color: theme === 'dark' ? 'white' : 'black',
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

  function handleScroll(component) {
    scrollToSection(component)
    setisopen(false)
  }

  return (

    <div className='fullpage' >
      {
        isenglish ?
          <nav className='navbar'
            style={{
              background: theme === 'dark' ? '#52d3d8' : '#98eecc',
              color: theme === 'dark' ? 'white' : 'black',
              boxShadow: theme === 'dark' ? '0px 2px 5px #22abaf' : '0px 2px 5px rgba(0,0,0,0.2)',
              height: isopen ? 'auto' : '60px',
            }}>
            <ul className={isopen ? 'navbar-links active ' : 'navbar-links'}>
              <li onClick={() => handleScroll(home)}>Home</li>
              <li onClick={() => handleScroll(instace)}>Projects</li>
              <li onClick={() => handleScroll(about)}>about</li>
              <li onClick={() => handleScroll(exprence)}>Exprence</li>
              <li onClick={() => handleScroll(ablity)}>Skills</li>
              <li onClick={() => handleScroll(contact)}>Contact</li>
            </ul>

            <Navbar.Brand ref={home} onClick={() => handleScroll(home)} className=" fw-bold logo">
              <b> Azizi</b>
            </Navbar.Brand>

            <i onClick={toggleNav} className={isopen ? 'fa fa-times time navbartoggle' : 'fa fa-bars navbartoggle'}></i>

          </nav>

          :

          <nav className=' faNavbar faMain '
            style={{
              background: theme === 'dark' ? '#52d3d8' : '#98eecc',
              color: theme === 'dark' ? 'white' : 'black',
              boxShadow: theme === 'dark' ? '0px 2px 5px #22abaf' : '0px 2px 5px rgba(0,0,0,0.2)',
              height: isopen ? 'auto' : '60px'
            }}>

            <ul className={isopen ? 'navbar-links active ' : 'navbar-links Navfarsi'}  >
              <li onClick={() => handleScroll(home)} style={{ zIndex: '3000' }}>خانه</li>
              <li onClick={() => handleScroll(instace)}>پروژه ها</li>
              <li onClick={() => handleScroll(about)}>درباره</li>
              <li onClick={() => handleScroll(exprence)}>تجارب</li>
              <li onClick={() => handleScroll(ablity)}>مهارت ها</li>
              <li onClick={() => handleScroll(contact)}>ارتباط</li>
            </ul>

            <Navbar.Brand ref={home} onClick={() => handleScroll(home)} className=" fw-bold logoFa">
              <b>عزیزی</b>
            </Navbar.Brand>

            <i onClick={toggleNav} className={isopen ? 'fa fa-times timef navbartogglef' : 'fa fa-bars navbartogglef'}></i>
          </nav>

      }


      {
        isenglish ?
          <button onClick={handlelangeage} style={style2} className='btn-change fa ' >فا</button>
          :
          <button onClick={handlelangeage} style={style2} className=' btn-change en' >En</button>
      }


      <Container className='main' ref={home}>

        <div className='con' onClick={() => setisopen(false)}>
          <Row >
            <Col lg={4} xl={4}>
              {isenglish ?
                <LeftMain /> :
                <Faleft />
              }
            </Col>

            <Col lg={4} xl={4} xs={12} className='mt-lg-5 pb-lg-5'>
              <Middlemain>
                {isenglish ?
                  <div className='info'>
                    <h2 className='pt-2 ' style={{ textAlign: 'center' }}><b>Mohammad Owais Azizi</b></h2>
                    <p className='pt-1'>is living in Herat city, pursuing studies in Computer Sience in Herat university.
                      Should you require assistance? please feel free to contact me through any of the provided ways: <br />
                    </p>
                    <div className='phone mb-1 mb-md-0' data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                      <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-0 contactbtn px-3 py-2"
                        style={{ background: theme === 'dark' ? '#02f5fd' : '#98eecc', color: theme === 'dark' ? 'white' : 'black', boxShadow: theme === 'dark' ? '0px 2px 8px  rgba(14, 205, 211,0.8)' : '0px 3px 12px rgba(0,0,0,0.2)' }} >Contact Me <FaArrowDown /></button></span>
                    </div>
                  </div> :

                  <div className='info faMain'>
                    <h2 className='pt-2' style={{ textAlign: 'center' }}><b>محمد اویس عزیزی</b></h2>
                    <p className='pt-1' >در شهر هرات زندگی میکند و در حال آموختن رشته کمپیوتر ساینس در دانشگاه هرات است.آیا به کمک ضرورت دارید ؟ اگر بلی میتوانید از راه های زیر با من تماس بگیرید <br />
                    </p>
                    <div className='phone mb-4 mb-md-0' data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                      <span onClick={() => scrollToSection(contact)}> <button className="mb-2 mt-0 contactbtn px-3 py-2"
                        data-aos-delay="800" style={{ background: theme === 'dark' ? '#02f5fd' : '#98eecc', color: theme === 'dark' ? 'white' : 'black', boxShadow: theme === 'dark' ? '0px 2px 8px   rgba(14, 205, 211,0.8)' : '0px 3px 12px rgba(0,0,0,0.2)' }} > <FaArrowDown /> ارتباط با من  </button></span>

                    </div>
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
          <Instances theme={theme} /> : <FaInstances theme={theme} />}</div>
        <div ref={about}> {isenglish ? <About theme={theme} /> : <Faabout theme={theme} />}</div>
        <div ref={exprence}> {isenglish ? <Exprence /> : <FaExprence />}</div>
        <div ref={ablity}> {isenglish ? <Ablity theme={theme} /> : <FaAblity theme={theme} />}</div>
        <div ref={contact}> {isenglish ? <Contact theme={theme} click={() => scrollToSection(home)} refResult={home} /> : <FaContact theme={theme} click={() => scrollToSection(home)} refResult={home} />}</div>
      </div>

    </div>
  );
}

export default memo(Main)
