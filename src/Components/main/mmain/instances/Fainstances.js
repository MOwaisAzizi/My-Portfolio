import React, { useState } from "react";
import mapty from './Mapty.png'
import RandomGame from './RandomGame.png'
import note from './note.png'
import sell from './sell.png'
import lib from './lib.png'
import library from './library.png'
import './instance.css'
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FaInstances = (props) => {

  const [showlinks1, setshowlinks1] = useState(false)
  const [showlinks2, setshowlinks2] = useState(false)
  const [showlinks3, setshowlinks3] = useState(false)
  const [showlinks4, setshowlinks4] = useState(false)
  const [showlinks5, setshowlinks5] = useState(false)
  const [showlinks6, setshowlinks6] = useState(false)

  function showlinks1Handler(){
    setshowlinks1(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
    
  }
  function showlinks2Handler(){
    setshowlinks2(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
  }
  function showlinks3Handler(){
    setshowlinks3(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
  }
  function showlinks4Handler(){
    setshowlinks4(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks5(false)
    setshowlinks6(false)
  }
  function showlinks5Handler(){
    setshowlinks5(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks6(false)
  }
  function showlinks6Handler(){
    setshowlinks6(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
  }

  return (
    <div className="instance faInstance">
      <div className="pb-3">
        <h2 className="pt-md-5 pt-lg-1 pt-4" style={{ textAlign: 'center' }} data-aos="fade-up">نمونه از پروژه های من</h2>
        <Row>
          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فروشگاه</h4>
            <li className="li" onClick={ showlinks1Handler}>
              <Card className="card " >
                <img className="Card-img" src={sell}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Online-Market' ><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='http://online-market-phi.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, API, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">لیست یاداشت ها با نقشه</h4>
            <li className="li" onClick={ showlinks2Handler} >
              <Card className="card" >
                <img className="Card-img " src={mapty}></img>
              </Card>


              {showlinks2 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Mapty-ToDoList'><i className="fa fa-github icons"></i></a> گیت هاب</Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='https://mapty-gules.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS(OOP)</p>


          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">گیم تاس</h4>
            <li className='li' onClick={ showlinks3Handler} >

              <Card className="card"  >
                <img className="card-img" src={RandomGame}></img>
              </Card>

              {showlinks3 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Random-Match-Game'><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='https://game-iota-five.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">اپلیکیشن بانک</h4>
            <li className='li' onClick={showlinks4Handler}>
              <Card className="card " >
                <img className="card-img" src={note}></img>
              </Card>
              {showlinks4 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/BankApplication'><i className="fa fa-github icons"></i>گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/BankApplication/'><i className="fa fa-globe icons"></i></a>دیدن</Button>
                    </div>

                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">ویبسایت معلوماتی</h4>
            <li className='li' onClick={ showlinks5Handler}>
              <Card className="card" >
                <img className="card-img" src={lib}></img>
              </Card>
              {showlinks5 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Bootstrap-Project'><i className="fa fa-github icons"></i> گیت هاب </a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Bootstrap-Project/'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <br />
            <br />
            <p className="card-title">HTML, CSS, Bootstrap, SCSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">کتابخانه</h4>
            <li className='li' onClick={ showlinks6Handler}>
              <Card className="card" >
                <img className="card-img" src={library}></img>
              </Card>
              {showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/library'><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-delay="200"><a href='http://library-isos.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, API, CSS</p>
          </Col>
        </Row>

        <Container className="mb-3 mb-md-0">
          <Row className="more">
            <Col >
              <Link to='/project'><button className="h ms-lg-1 ms-2 pt-md-1" onClick={props.click}> <span className="faarrow" >&larr;</span> دیدن بیشتر</button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default FaInstances