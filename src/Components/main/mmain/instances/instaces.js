import React, { useEffect, useRef, useState } from "react";
import note from './note.png'
import sell from './sell.png'
import lib from './lib.png'
import library from './library.png'
import mapty from './Mapty.png'
import weather from './weather.png'
import Movie from './movie.png'
import RandomGame from './RandomGame.png'
import './instance.css'
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'


const images = [note, sell, weather,Movie, library, mapty, RandomGame]

const Instances = ({theme}) => {

  const style = {
    background: theme=='dark' ? '#52d3d8' : '#98eecc',
    color: theme == 'dark' ? 'white' : 'black',
    boxShadow:theme == 'dark' ? '0px 5px 15px #22abaf':'0px 2px 15px #47cc97'
  }

  const style2 = {
    color: theme == 'dark' ? '#52d3d8' : '#58f1b4',
  }

  const [showlinks1, setshowlinks1] = useState(false)
  const [showlinks2, setshowlinks2] = useState(false)
  const [showlinks3, setshowlinks3] = useState(false)
  const [showlinks4, setshowlinks4] = useState(false)
  const [showlinks6, setshowlinks6] = useState(false)
  const [showlinks7, setshowlinks7] = useState(false)
  const [showlinks8, setshowlinks8] = useState(false)

  function showlinks1Handler() {
    setshowlinks1(showlink => !showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks7(false)

  }
  function showlinks2Handler() {
    setshowlinks2(showlink => !showlink)
    setshowlinks1(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks7(false)
  }
  function showlinks3Handler() {
    setshowlinks3(showlink => !showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks4(false)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks7(false)
  }
  function showlinks4Handler() {
    setshowlinks4(showlink => !showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks7(false)
  }

  function showlinks6Handler() {
    setshowlinks6(showlink => !showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks8(false)
    setshowlinks7(false)
  }
  function showlinks7Handler() {
    setshowlinks7(showlink => !showlink)
    setshowlinks6(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks8(false)

  }
  function showlinks8Handler() {
    setshowlinks8(showlink => !showlink)
    setshowlinks7(false)
    setshowlinks6(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const[AcitveDots,setAcitveDots] = useState(0)
  const [width,setWidth] = useState(window.innerWidth)  
  

  function handlResize(){
    setWidth(window.innerWidth)
  }
  useEffect(function(){

  window.addEventListener('resize',handlResize)
  return ()=> window.removeEventListener('resize',handlResize)

  },[])


  function nextSlide() {
    setCurrentIndex(preIndex => preIndex==images.length ? preIndex = 0 : (preIndex + 1) % images.length)
    setAcitveDots(cur=>cur+1)
  }
  
  function prevSlide() {
    setCurrentIndex(preIndex => preIndex === 0 ? width >= 750 ? images.length - 3 : images.length - 1 : preIndex - 1)
    setAcitveDots(cur=>cur-1)
  }

  function acitveHandler(active){    
    setCurrentIndex(active)
    setAcitveDots(active)
    
  }
  // const x = useRef(null)
  // const ref = useCursor()

  return (
    <div className="instance" >

<Container className=" contain"> 
   <div className="pb-md-3 pb-1 slider ">

        <h2 className="pt-md-5 pt-lg-1 pt-4" style={{ textAlign: 'center' }} data-aos="fade-up">My Instance Projecs</h2>

        <div className="slides" style={{ transform: `translateX(-${ width >= 700 ? currentIndex * 450 : width <700 && width>500 ? currentIndex * 520 :  currentIndex * 370}px)` }}>
         

          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Mapty-ToDO-list</h4>
            <li className="li" onClick={showlinks2Handler} >
              <Card className="card" >
                <img className="Card-img " src={mapty}></img>
              </Card>

              { showlinks2 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Mapty-ToDoList'>Github <i style={style2}  className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://mapty-gules.vercel.app'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <br/>

            <p className="card-title">HTML, CSS, JS(OOP)</p>


          </div >

          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Weather-App</h4>
            <li className="li" onClick={showlinks7Handler} >
              <Card className="card" >
                <img className="Card-img " src={weather}></img>
              </Card>

              { showlinks7 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Weather-App'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://weather-app-delta-ebon.vercel.app/'>Visit <i  style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <br/>

            <p className="card-title">React, CSS, API</p>


          </div >

          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Shopping App</h4>
            <li className="li" onClick={showlinks1Handler}>
              <Card className="card" >
                <img className="Card-img" src={sell}></img>
              </Card>
              { showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Online-Market'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://online-market-phi.vercel.app'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, API, CSS</p>
          </div >

          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Dice Game</h4>
            <li className='li' onClick={showlinks3Handler} >

              <Card className="card"  >
                <img className="card-img" src={RandomGame}></img>
              </Card>

              { showlinks3 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Random-Match-Game'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://game-iota-five.vercel.app'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </div >

          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Bank Application</h4>
            <li className='li' onClick={showlinks4Handler}>
              <Card className="card " >
                <img className="card-img" src={note}></img>
              </Card>
              { showlinks4 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2 " data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/BankApplication'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://mowaisazizi.github.io/BankApplication/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>

                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>
          </div >

          <div data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Movie-App</h4>
            <li className='li' onClick={showlinks8Handler}>
              <Card className="card" >
                <img className="card-img" src={Movie}></img>
              </Card>
              { showlinks8 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/MoveList-app'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://movielist-phi.vercel.app/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React,CSS,API</p>
          </div >


          <div data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Library</h4>
            <li className='li' onClick={showlinks6Handler}>
              <Card className="card" >
                <img className="card-img" src={library}></img>
              </Card>
              { showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/library' className="ps-1">Github<i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a href='http://library-isos.vercel.app' className="ps-1">Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, API, CSS</p>
          </div >
        {/* </div> */}
        </div>

        <div className="mt-md-4 mt-3 activeContainer">
 {Array.from({length:images.length},(_,i)=>i).map((acitve,index)=>{
          return (
            <span  className={currentIndex == index ? 'dot dot--active' : 'dot'} onClick={()=>acitveHandler(acitve)}><span style={{color:theme=='dark' ?'#52d3d8' :'#98eecc' }}>.</span></span>
          )
        })}

 </div>
        <Container className="">
          {/* <Row className="more" > */}
            <div className="mb-3 mb-md-0  mt-4 me-3 me-sm-0">
              <Link to='/project'>  <button style={style} className="h ms-lg-1 ms-2 py-md-1" >See More <span className="arrow">&rarr;</span></button></Link>
            </div>
          {/* </Row> */}
        </Container>

      </div>



   </Container>
   <button style={style} onClick={prevSlide} className="arrows arrow-left">&larr; </button>
       <button style={style} onClick={nextSlide} className="arrows arrow-right">&rarr;</button>
    </div>
  )
}
export default Instances







        {/* <Row>
          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Shopping App</h4>
            <li className="li" onClick={showlinks1Handler}>
              <Card className="card" >
                <img className="Card-img" src={sell}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <Row>
                    <div className='links'>
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Online-Market'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://online-market-phi.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">React, API, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Mapty-ToDO-list</h4>
            <li className="li" onClick={showlinks2Handler} >
              <Card className="card" >
                <img className="Card-img " src={mapty}></img>
              </Card>

              {showlinks2 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Mapty-ToDoList'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://mapty-gules.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS(OOP)</p>


          </Col>


          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Dice Game</h4>
            <li className='li' onClick={showlinks3Handler} >

              <Card className="card"  >
                <img className="card-img" src={RandomGame}></img>
              </Card>

              {showlinks3 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Random-Match-Game'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='https://game-iota-five.vercel.app'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, CSS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Bank Application</h4>
            <li className='li' onClick={showlinks4Handler}>
              <Card className="card " >
                <img className="card-img" src={note}></img>
              </Card>
              {showlinks4 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2 " data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/BankApplication'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://mowaisazizi.github.io/BankApplication/'>Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>

                  </Row>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>
          </Col>

          <Col lg={4} md={6} data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Info Website</h4>
            <li className='li' onClick={showlinks5Handler}>
              <Card className="card" >
                <img className="card-img" src={lib}></img>
              </Card>
              {showlinks5 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a className="ps-1" href='https://github.com/MOwaisAzizi/Bootstrap-Project'>Github <i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a className="ps-1" href='http://mowaisazizi.github.io/Bootstrap-Project/'>Visit <i className="fa fa-globe icons"></i></a></Button>
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
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">Library</h4>
            <li className='li' onClick={showlinks6Handler}>
              <Card className="card" >
                <img className="card-img" src={library}></img>
              </Card>
              {showlinks6 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-delay="200"><a href='https://github.com/MOwaisAzizi/library' className="ps-1">Github<i className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-delay="200"><a href='http://library-isos.vercel.app' className="ps-1">Visit <i className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React, API, CSS</p>
          </Col>



        </Row>

        <Container className="mb-3 mb-md-0 mt-2">
          <Row className="more">
            <Col >
              <Link to='/project'>  <button className="h ms-lg-1 ms-2 py-md-1" onClick={click}>See More <span className="arrow">&rarr;</span></button></Link>
            </Col>
          </Row> */}