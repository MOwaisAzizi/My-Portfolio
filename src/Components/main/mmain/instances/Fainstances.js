import React, { useState,useEffect } from "react";
import mapty from './Mapty.png'
import RandomGame from './RandomGame.png'
import note from './note.png'
import sell from './sell.png'
import lib from './lib.png'
import library from './library.png'
import weather from './weather.png'
import Movie from './movie.png'
import './instance.css'
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




const FaInstances = (props) => {
  const images = [note, sell, lib, library, mapty, RandomGame,weather,Movie]

  const style = {
    background: props.theme=='dark' ? '#52d3d8' : '#98eecc',
    color: props.theme == 'dark' ? 'white' : 'black',
    boxShadow: props.theme == 'dark' ? '0px 5px 15px #22abaf':'0px 2px 15px #47cc97 '
  }
  const style1 = {
    background: props.theme=='dark' ? '#52d3d8' : '#98eecc',
    color: props.theme == 'dark' ? 'white' : 'black',
  }

  const style2 = {
    color: props.theme == 'dark' ? '#52d3d8' : '#58f1b4',
  }

  const [showlinks1, setshowlinks1] = useState(false)
  const [showlinks2, setshowlinks2] = useState(false)
  const [showlinks3, setshowlinks3] = useState(false)
  const [showlinks4, setshowlinks4] = useState(false)
  const [showlinks6, setshowlinks6] = useState(false)
  const [showlinks7, setshowlinks7] = useState(false)
  const [showlinks8, setshowlinks8] = useState(false)

  function showlinks1Handler(){
    setshowlinks1(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks6(false)
    
  }
  function showlinks2Handler(){
    setshowlinks2(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks6(false)
  }
  function showlinks3Handler(){
    setshowlinks3(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks4(false)
    setshowlinks6(false)
  }
  function showlinks4Handler(){
    setshowlinks4(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks6(false)
  }

  function showlinks6Handler(){
    setshowlinks6(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
  }
  function showlinks7Handler(){
    setshowlinks7(showlink=>!showlink)
    setshowlinks6(false)
    setshowlinks8(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
  }
  function showlinks8Handler(){
    setshowlinks8(showlink=>!showlink)
    setshowlinks6(false)
    setshowlinks7(false)
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
    setCurrentIndex(preIndex => preIndex === 0 ?  width >= 850 ? images.length - 2 : images.length - 1 : preIndex - 1)
    setAcitveDots(cur=>cur-1)
  }

  function acitveHandler(active){    
    setCurrentIndex(active)
    setAcitveDots(active)
    
  }

  return (
    <div className="instance faInstance">

   <Container className="contain">
   <div className="pb-3 slider">
        <h2 className="pt-md-5 pt-lg-1 pt-4" style={{ textAlign: 'center' }} data-aos="fade-up">نمونه پروژه های من</h2>
        {/* <Row> */}
   <div  className="slides" style={{ transform: `translateX(-${ width >= 750 ? currentIndex * 450 : width <750 && width>500 ? currentIndex * 520 :  currentIndex * 320}px)` }}>


          <div  data-aos="fade-up" className="mb-3 slide"  data-aos-duration="1000">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">لیست یاداشت ها با نقشه</h4>
            <li className="li" onClick={ showlinks2Handler} >
              <Card className="card" >
                <img className="Card-img " src={mapty}></img>
              </Card>


              {showlinks2 ?
                <div className="backdrop">
                  <div>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Mapty-ToDoList'><i style={style2} className="fa fa-github icons"></i></a> گیت هاب</Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-duration="500"><a href='https://mapty-gules.vercel.app'><i style={style2} className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </div>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS(OOP)</p>


          </div>

          <div data-aos="fade-up" className="mb-3 slide"  data-aos-duration="1000">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">آب و هوا</h4>
            <li className="li" onClick={showlinks7Handler} >
              <Card className="card" >
                <img className="Card-img " src={weather}></img>
              </Card>

              {showlinks7 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/Weather-App'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='https://weather-app-delta-ebon.vercel.app/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <br/>

            <p className="card-title">React, CSS, API</p>


          </div >

          <div  data-aos="fade-up" className="mb-3 slide"  data-aos-duration="1000">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فروشگاه</h4>
            <li className="li" onClick={ showlinks1Handler}>
              <Card className="card " >
                <img className="Card-img" src={sell}></img>
              </Card>
              {showlinks1 ?
                <div className="backdrop" >
                  <div>
                    <div className='links'>
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Online-Market' ><i style={style2} className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-duration="500"><a href='http://online-market-phi.vercel.app'><i style={style2} className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </div>
                </div>
                : null}
            </li>

            <p className="card-title">React, API, CSS</p>
          </div>
       


          <div  data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">گیم تاس</h4>
            <li className='li' onClick={ showlinks3Handler} >

              <Card className="card"  >
                <img className="card-img" src={RandomGame}></img>
              </Card>

              {showlinks3 ?
                <div className="backdrop">
                  <div>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/Random-Match-Game'><i style={style2} className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-duration="500"><a href='https://game-iota-five.vercel.app'><i style={style2} className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </div>
                </div>
                : null}
            </li>

            <p className="card-title">React, CSS</p>
          </div>

          <div  data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">اپلیکیشن بانک</h4>
            <li className='li' onClick={showlinks4Handler}>
              <Card className="card " >
                <img className="card-img" src={note}></img>
              </Card>
              {showlinks4 ?
                <div className="backdrop">
                  <div>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/BankApplication'><i style={style2} className="fa fa-github icons"></i>گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-duration="500"><a href='http://mowaisazizi.github.io/BankApplication/'><i style={style2} className="fa fa-globe icons"></i></a>دیدن</Button>
                    </div>

                  </div>
                </div>
                : null}
            </li>

            <p className="card-title">HTML, CSS, JS</p>
          </div>

          <div data-aos="fade-up" className="mb-md-0 mb-lg-3 mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فلم-لیست</h4>
            <li className='li' onClick={showlinks8Handler}>
              <Card className="card" >
                <img className="card-img" src={Movie}></img>
              </Card>
              {showlinks8 ?
                <div className="backdrop">
                  <Row>
                    <div className='links'  >
                      <Button className="btn btn-light me-sm-2" data-aos="fade-right" data-aos-duration="500"><a className="ps-1" href='https://github.com/MOwaisAzizi/MoveList-app'>Github <i style={style2} className="fa fa-github icons"></i></a></Button>
                      <Button className="btn btn-light ms-2 " data-aos="fade-left" data-aos-duration="500"><a className="ps-1" href='https://movielist-phi.vercel.app/'>Visit <i style={style2} className="fa fa-globe icons"></i></a></Button>
                    </div>
                  </Row>
                </div>
                : null}
            </li>
            <p className="card-title">React,CSS,API</p>
          </div >

          <div  data-aos="fade-up" className="mb-3 slide">
            <h4 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">کتابخانه</h4>
            <li className='li' onClick={ showlinks6Handler}>
              <Card className="card" >
                <img className="card-img" src={library}></img>
              </Card>
              {showlinks6 ?
                <div className="backdrop">
                  <div>
                    <div className='links'  >
                      <Button className="btn btn-light pe-2 me-sm-2" data-aos="fade-right" data-aos-duration="500"><a href='https://github.com/MOwaisAzizi/library'><i style={style2} className="fa fa-github icons"></i> گیت هاب</a></Button>
                      <Button className="btn btn-light ms-2 pe-3" data-aos="fade-left" data-aos-duration="500"><a href='http://library-isos.vercel.app'><i style={style2} className="fa fa-globe icons"></i> دیدن</a></Button>
                    </div>
                  </div>
                </div>
                : null}
            </li>
            <p className="card-title">React, API, CSS</p>
          </div>
   </div>
        {/* </Row> */}

        
        <div className="mt-md-4 mt-3 activeContainer">
 {Array.from({length:images.length},(_,i)=>i).map((acitve,index)=>{
          return (
            <span  className={currentIndex == index ? 'dot dot--active' : 'dot'} onClick={()=>acitveHandler(acitve)}><span style={{color:props.theme=='dark' ?'#52d3d8' :'#98eecc' }}>.</span></span>
          )
        })}

 </div>

        <Container className="mb-3 mb-md-0 mt-3">
            <div  className="mb-4 mb-md-0  mt-4 me-3 me-sm-0">
              <Link to='/project'><button style={style} className="h ms-lg-1 ms-2 pt-md-1 More " onClick={props.click}> <span className="faarrow" >&larr;</span> دیدن بیشتر</button></Link>
            </div>
        </Container>
      </div>
   </Container>
   <button onClick={prevSlide} className="arrows arrow-left" style={style1}>&larr; </button>
       <button onClick={nextSlide} className="arrows arrow-right" style={style1}>&rarr;</button>
    </div>
  )
}
export default FaInstances