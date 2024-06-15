import React, { useState } from "react";
import counter from './counter.png'
import market from './market.png'
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


  return (
    <div className="instance">
      <div className="pb-3">
        <h2 className="pt-4" style={{ textAlign: 'center' }} data-aos="fade-up">نمونه از پروژه های من</h2>
        <Row>
          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فروشگاه</h3>
            <li className="li" onClick={() => setshowlinks1(!showlinks1)}>
              <Card className="card " >
                <img className="Card-img" src={sell}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Online-Market'><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://online-market-phi.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, API, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">ویبسایت بانک</h3>
            <li className="li" onClick={() => setshowlinks2(!showlinks2)} >
              <Card className="card" >
                <img className="Card-img " src={market}></img>
              </Card>


              {showlinks2 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Back_Info-Website'><i className="fa fa-github icons"></i></a> گیت هاب</Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Back_Info-Website/'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>


          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">شمارنده</h3>
            <li className='li' onClick={() => setshowlinks3(!showlinks3)} >

              <Card className="card"  >
                <img className="card-img" src={counter}></img>
              </Card>

              {showlinks3 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Counter'><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Counter/'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">اپلیکیشن بانک</h3>
            <li className='li' onClick={() => setshowlinks4(!showlinks4)}>
              <Card className="card " >
                <img className="card-img" src={note}></img>
              </Card>
              {showlinks4 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/BankApplication'><i className="fa fa-github icons"> گیت هاب</i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/BankApplication/'><i className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>

                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">ویبسایت معلوماتی</h3>
            <li className='li' onClick={() => setshowlinks6(!showlinks6)}>
              <Card className="card" >
                <img className="card-img" src={lib}></img>
              </Card>
              {showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Bootstrap-Project'><i className="fa fa-github icons"></i> گیت هاب </a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Bootstrap-Project/'><i className="fa fa-globe icons"></i> دیدن</a></Button>
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
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">کتابخانه</h3>
            <li className='li' onClick={() => setshowlinks5(!showlinks5)}>
              <Card className="card" >
                <img className="card-img" src={library}></img>
              </Card>
              {showlinks5 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/library'><i className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://library-isos.vercel.app'><i className="fa fa-globe icons"></i> دیدن</a></Button>
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
              <Link to='/project'><button className="h ms-lg-1 ms-2" onClick={props.click}>  <i className="fa fa-arrow-left arrow"></i> دیدن بیشتر</button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default FaInstances