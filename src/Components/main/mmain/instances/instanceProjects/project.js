import React, { useState } from "react";
import './Project.css'
import intro from '../intro.png'
import company from '../company.png'
import game1 from '../game1.png'
import game2 from '../game2.png'
import colculator from '../colculator.png'
import noteMangage from '../noteManage.png'
import travel from '../travel.png'
import split from '../split.png'
import mem from '../mem.png'
import country from '../country.png'
import market from '../market.png'
import counter from '../counter.png'
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";

const Project = (props) => {

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
    <div className="project pt-3 pt-md-0">
      <Link to={'/'} className="link" onClick={props.back}>
         <i className="fa fa-arrow-left leftArrow" style={{color:props.theme == 'dark' ? 'white' : 'rgb(92, 92, 249)'}}></i> <span style={{color:props.theme == 'dark' ? 'white' : 'rgb(92, 92, 249)'}} className="back">Back</span></Link>
        
        <Row className="pt-3 pb-5 pt-md-5">

        <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Travel List</h3>
            <li className="li" onClick={showlinks1Handler } >
              <Card className="card" >
                <img className="card-img" src={travel}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/travel-list-note'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://travel-ashy-eight.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Eat-Split-App</h3>
            <li className="li" onClick={showlinks2Handler}>
              <Card className="card" >
                <img className="card-img" src={split}></img>
              </Card>
              {showlinks2 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Eat-split-app'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://split-eat.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Countries-Data-App</h3>
            <li className="li" onClick={showlinks3Handler}>
              <Card className="card" >
                <img className="card-img" src={country}></img>
              </Card>
              {showlinks3 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Countries-Data-App'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Countries-Data-App'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>

       
          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Pig Game</h3>
            <li className='li' onClick={showlinks13Handler} >
              <Card className="card" >
                <img className="card-img" src={game2}></img>
              </Card>
              {showlinks13 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Pig-Game'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://mowaisazizi.github.io/Pig-Game/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>

    
          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Bank Website</h3>
            <li className="li" onClick={showlinks6Handler} >
              <Card className="card" >
                <img className="Card-img " src={market}></img>
              </Card>

              {showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Back_Info-Website'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://mowaisazizi.github.io/Back_Info-Website/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>


          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Counter</h3>
            <li className='li' onClick={showlinks7Handler} >

              <Card className="card"  >
                <img className="card-img" src={counter}></img>
              </Card>

              {showlinks7 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Counter4'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://counter4.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>








          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Calculator</h3>
            <li className="li" onClick={showlinks8Handler}>
              <Card className="card" >
                <img className="card-img" src={colculator}></img>
              </Card>
              {showlinks8 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Calculator'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Calculator/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Company Website</h3>
            <li className='li' onClick={showlinks9Handler}>
              <Card className="card" >
                <img className="card-img" src={intro} ></img>
              </Card>
              {showlinks9 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/progect1'>Github<i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://mowaisazizi.github.io/progect1/'>Visit<i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, bootstrap</p>
          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">To Do List</h3>
            <li className='li' onClick={showlinks10Handler}>
              <Card className="card" >
                <img className="card-img" src={noteMangage}></img>
              </Card>

              {showlinks10 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Note-Management-App'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Note-Management-App/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}

            </li>
            <p className="card-title">HTML, CSS, JS</p>

          </Col>



          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Guess My Number</h3>
            <li className='li' onClick={showlinks11Handler}>
              <Card className="card" >
                <img className="card-img" src={game1}></img>
              </Card>
              {showlinks11 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Guess-My-Number'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='http://mowaisazizi.github.io/Guess-My-Number/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">HTML, CSS, JS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Mem-Generator</h3>
            <li className="li" onClick={showlinks4Handler}>
              <Card className="card" >
                <img className="card-img" src={mem}></img>
              </Card>
              {showlinks4 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/Mem_Generator'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://memgerrator.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Store</h3>
            <li className='li' onClick={showlinks12Handler} >
              <Card className="card" >
                <img className="card-img" src={company}></img>
              </Card>
              {showlinks12 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/project-4-of--4'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2" data-aos="fade-left" data-aos-delay="200"><a href='https://mowaisazizi.github.io/project-4-of--4/'>Visit <i className="fa fa-globe icons"></i></a></Button>
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