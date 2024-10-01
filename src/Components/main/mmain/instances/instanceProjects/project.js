import React, { useState,useRef,useEffect } from "react";
import './Project.css'
import intro from '../intro.png'
import company from '../company.png'
import game1 from '../game1.png'
import game2 from '../game2.png'
import colculator from '../colculator.png'
import noteMangage from '../noteManage.png'
import travel from '../travel.png'
import split from '../split.png'
import alarm from '../alarm.png'
import country from '../country.png'
import market from '../market.png'
import calculator from '../culculator2.png'
import lib from '../lib.png'

import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

const Project = (props) => {

  const style2 = {
    color: props.theme === 'dark' ? '#52d3d8' : '#58f1b4',
  }
  const style = {
    color: props.theme === 'dark' ? 'white' : 'black',
  }

  const [showlinks1, setshowlinks1] = useState(false)
  const [showlinks2, setshowlinks2] = useState(false)
  const [showlinks3, setshowlinks3] = useState(false)
  const [showlinks4, setshowlinks4] = useState(false)
  const [showlinks5, setshowlinks5] = useState(false)
  const [showlinks6, setshowlinks6] = useState(false)
  const [showlinks7, setshowlinks7] = useState(false)
  const [showlinks8, setshowlinks8] = useState(false)
  const [showlinks9, setshowlinks9] = useState(false)
  const [showlinks10, setshowlinks10] = useState(false)
  const [showlinks11, setshowlinks11] = useState(false)
  const [showlinks12, setshowlinks12] = useState(false)
  const [showlinks13, setshowlinks13] = useState(false)

  
  function showlinks1Handler(){
    setshowlinks1(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

    
  }
  function showlinks2Handler(){
    setshowlinks2(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks3Handler(){
    setshowlinks3(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks4Handler(){
    setshowlinks4(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks5(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks5Handler(){
    setshowlinks5(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks6Handler(){
    setshowlinks6(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks5(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks7Handler(){
    setshowlinks7(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks8Handler(){
    setshowlinks8(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks6(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks9Handler(){
    setshowlinks9(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks6(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks10Handler(){
    setshowlinks10(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks6(false)
    setshowlinks11(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks11Handler(){
    setshowlinks11(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks6(false)
    setshowlinks12(false)
    setshowlinks13(false)

  }
  function showlinks12Handler(){
    setshowlinks12(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks6(false)
    setshowlinks13(false)
  }
  function showlinks13Handler(){
    setshowlinks13(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks5(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
    setshowlinks9(false)
    setshowlinks10(false)
    setshowlinks11(false)
    setshowlinks6(false)
    setshowlinks12(false)
  }






  return (
    <div className="project pt-3 pt-md-0" >
      <Link to={'/'} className="link" onClick={props.back}>
         <i style={style} className="fa fa-arrow-left leftArrow" ></i> <span style={style} className="back">Back</span></Link>
        
        <Row className="pt-3 pb-5 pt-md-5">

        <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3 ">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Travel List</h4>
            <li className="li" onClick={showlinks1Handler } >
              <Card className="card" >
                <img className="card-img" src={travel}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500" ><a href='https://github.com/MOwaisAzizi/travel-list-note'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500" ><a href='https://travel-ashy-eight.vercel.app'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3 ">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Eat-Split-App</h4>
            <li className="li" onClick={showlinks2Handler}>
              <Card className="card" >
                <img className="card-img" src={split}></img>
              </Card>
              {showlinks2 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Eat-split-app'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='https://split-eat.vercel.app'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Info Website</h4>
            <li className='li' onClick={showlinks7Handler} >
              <Card className="card" >
                <img className="card-img" src={lib}></img>
              </Card>
              {showlinks7 ?
                <div className="backdrop" >
                      <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/Bootstrap-Project'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='http://mowaisazizi.github.io/Bootstrap-Project/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, bootstrap,SCSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3 ">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Countries-Data-App</h4>
            <li className="li" onClick={showlinks3Handler}>
              <Card className="card" >
                <img className="card-img" src={country}></img>
              </Card>
              {showlinks3 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Countries-Data-App'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='http://mowaisazizi.github.io/Countries-Data-App'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Calculator</h4>
            <li className="li" onClick={showlinks5Handler} >
              <Card className="card" >
                <img className="Card-img " src={calculator}></img>
              </Card>

              {showlinks5 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/React-Culculator'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='https://react-culculator.vercel.app/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, CSS</p>


          </Col>
       
          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Pig Game</h4>
            <li className='li' onClick={showlinks13Handler} >
              <Card className="card" >
                <img className="card-img" src={game2}></img>
              </Card>
              {showlinks13 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Pig-Game'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='https://mowaisazizi.github.io/Pig-Game/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>

    
          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Bank Website</h4>
            <li className="li" onClick={showlinks6Handler} >
              <Card className="card" >
                <img className="Card-img " src={market}></img>
              </Card>

              {showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/Back_Info-Website'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='http://mowaisazizi.github.io/Back_Info-Website/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>


          </Col>


          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Alarm-Clock</h4>
            <li className="li" onClick={showlinks4Handler} >
              <Card className="card" >
                <img className="Card-img " src={alarm}></img>
              </Card>

              {showlinks4 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/Alarm_Clock-App'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='https://alarm-clock-app-ebon.vercel.app'>Visit <i style={style2}  className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, CSS</p>


          </Col>


          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3 ">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Calculator</h4>
            <li className="li" onClick={showlinks8Handler}>
              <Card className="card" >
                <img className="card-img" src={colculator}></img>
              </Card>
              {showlinks8 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Calculator'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='http://mowaisazizi.github.io/Calculator/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>


          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Company Website</h4>
            <li className='li' onClick={showlinks9Handler}>
              <Card className="card" >
                <img className="card-img" src={intro} ></img>
              </Card>
              {showlinks9 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/progect1'>Github<i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='https://mowaisazizi.github.io/progect1/'>Visit<i style={style2}  className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, bootstrap</p>
          </Col>


          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">To Do List</h4>
            <li className='li' onClick={showlinks10Handler}>
              <Card className="card" >
                <img className="card-img" src={noteMangage}></img>
              </Card>

              {showlinks10 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Note-Management-App'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='http://mowaisazizi.github.io/Note-Management-App/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, JS</p>

          </Col>



          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Guess My Number</h4>
            <li className='li' onClick={showlinks11Handler}>
              <Card className="card" >
                <img className="card-img" src={game1}></img>
              </Card>
              {showlinks11 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Guess-My-Number'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-duration="500"><a href='http://mowaisazizi.github.io/Guess-My-Number/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>




          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Store</h4>
            <li className='li' onClick={showlinks12Handler} >
              <Card className="card" >
                <img className="card-img" src={company}></img>
              </Card>
              {showlinks12 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/project-4-of--4'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://mowaisazizi.github.io/project-4-of--4/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, bootstrap</p>
          </Col>

       

        </Row>

    </div>
  )
}
export default Project