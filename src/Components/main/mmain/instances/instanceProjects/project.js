import React, { useState } from "react";
import './Project.css'
import intro from '../intro.png'
import company from '../company.png'
import game1 from '../game1.png'
import game2 from '../game2.png'
import colculator from '../colculator.png'
import noteMangage from '../noteManage.png'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Project = (props) => {

  const [showlinks1, setshowlinks1] = useState(false)
  const [showlinks2, setshowlinks2] = useState(false)
  const [showlinks3, setshowlinks3] = useState(false)
  const [showlinks4, setshowlinks4] = useState(false)
  const [showlinks5, setshowlinks5] = useState(false)
  const [showlinks6, setshowlinks6] = useState(false)


  return (
    <div className="project pt-3 pt-md-0">
      <Link to={'/'} className="link" onClick={props.back}> <i className="fa fa-arrow-left leftArrow"></i> <span className="back">Back</span></Link>
        <Row className="pt-3 pb-5 pt-md-5">

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 ">
            <h3 style={{ textAlign: 'center' }} className="pt-5 pt-md-3  pb-lg-0">Calculator</h3>
            <li className="li" onClick={() => setshowlinks1(!showlinks1)}>
              <Card className="card" >
                <img className="card-img" src={colculator}></img>
              </Card>
              {showlinks1 ?
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
            <li className='li' onClick={() => setshowlinks2(!showlinks2)}>
              <Card className="card" >
                <img className="card-img" src={intro} ></img>
              </Card>
              {showlinks2 ?
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
            <li className='li' onClick={() => setshowlinks3(!showlinks3)}>
              <Card className="card" >
                <img className="card-img" src={noteMangage}></img>
              </Card>

              {showlinks3 ?
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
            <li className='li' onClick={() => setshowlinks4(!showlinks4)}>
              <Card className="card" >
                <img className="card-img" src={game1}></img>
              </Card>
              {showlinks4 ?
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


          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Store</h3>
            <li className='li' onClick={() => setshowlinks5(!showlinks5)} >
              <Card className="card" >
                <img className="card-img" src={company}></img>
              </Card>
              {showlinks5 ?
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

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h3 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Pig Game</h3>
            <li className='li' onClick={() => setshowlinks6(!showlinks6)} >
              <Card className="card" >
                <img className="card-img" src={game2}></img>
              </Card>
              {showlinks6 ?
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
        </Row>

    </div>
  )
}
export default Project