import React, { useState,useEffect } from "react";
import mapty from './Mapty.png'
import note from './note.png'
import sell from './sell.png'
import library from './library.png'
import weather from './weather.png'
import Movie from './movie.png'
import './instance.css'
import { Card, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




const FaInstances = (props) => {
  const images = [note, sell, library, mapty,weather,Movie]

  const style = {
    background: props.theme === 'dark' ? '#52d3d8' : '#98eecc',
    color: props.theme === 'dark' ? 'white' : 'black',
    boxShadow: props.theme === 'dark' ? '0px 2px 8px #22abaf':'2px 5px 10px rgba(0, 0, 0,0.15) '
  }
  const style1 = {
    background: props.theme==='dark' ? '#52d3d8' : '#98eecc',
    color: props.theme === 'dark' ? 'white' : 'black',
  }

  const style2 = {
    color: props.theme === 'dark' ? '#52d3d8' : '#58f1b4',
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
    setshowlinks7(false)
    setshowlinks8(false)
    
  }
  function showlinks2Handler(){
    setshowlinks2(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
  }
  function showlinks4Handler(){
    setshowlinks4(showlink=>!showlink)
    setshowlinks1(false)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks6(false)
    setshowlinks7(false)
    setshowlinks8(false)
  }

  function showlinks6Handler(){
    setshowlinks6(showlink=>!showlink)
    setshowlinks2(false)
    setshowlinks3(false)
    setshowlinks4(false)
    setshowlinks1(false)
    setshowlinks7(false)
    setshowlinks8(false)
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
  const [width,setWidth] = useState(window.innerWidth)  
  

  function handlResize(){
    setWidth(window.innerWidth)
  }
  useEffect(function(){

  window.addEventListener('resize',handlResize)
  return ()=> window.removeEventListener('resize',handlResize)

  },[])

  function nextSlide() {
    setCurrentIndex(preIndex =>width > 1480 && preIndex === images.length-3 ? preIndex = 0 :  width > 1100 && width < 1480 && preIndex === images.length-2  ? preIndex = 0 : width  > 770 && width < 1100 && preIndex === images.length-2 ? preIndex = 0 : (preIndex + 1) % images.length)
  }
  
  function prevSlide() {
    setCurrentIndex(preIndex => preIndex === 0 ? width <=1100 && width >= 770 ? images.length - 2 : width <1480 && width > 1100  ? images.length-2 :  width > 1100 ? images.length-3 : images.length-1 : preIndex - 1)
  }

  function acitveHandler(active){    
    setCurrentIndex(active)
    
  }

  return (
    <div className="instance faInstance">

   <Container className="contain">
   <div className="pb-3 slider">
        <h2 className="pt-sm-5 pt-lg-1 pt-4" style={{ textAlign: 'center' }} data-aos="fade-up" data-aos-duration="500">نمونه های پروژه های من</h2>

   <div  className="slides"  style={{ transform: `translateX(-${ currentIndex * 16.8 }%)` }}>

          <div data-aos="zoom-in" data-aos-duration="1500" className="mb-3 slide" >
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">آب و هوا</h5>
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

        

          <div  data-aos="zoom-in" data-aos-duration="1500" className="mb-3 slide" >
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فروشگاه</h5>
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
       
          <div data-aos="zoom-in" data-aos-duration="1500" className="mb-3 slide" >
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">لیست یاداشت ها با نقشه</h5>
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

          <div data-aos="zoom-in" data-aos-duration="1500" className="mb-md-0 mb-lg-3 mb-3 slide">
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">فهرست فلم</h5>
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

       

          <div  data-aos="zoom-in" data-aos-duration="1500" className="mb-3 slide">
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">اپلیکیشن بانک</h5>
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

   

          <div  data-aos="zoom-in" data-aos-duration="1500" className="mb-3 slide">
            <h5 style={{ textAlign: 'center' }} className="pt-3 pb-lg-0">کتابخانه</h5>
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
            <p className="card-title">React, CSS, API, Firebase</p>
          </div>
  
   </div>

        
        <div className=" mt-sm-5 mt-3 activeContainer">
 {Array.from({length: width > 1250 ? 4 : width < 1250 && width >= 770 ? 5 : 6},(_,i)=>i).map((acitve,index)=>{
          return (
            <span key={index}  className={currentIndex === index ? 'dot dot--active' : 'dot'} onClick={()=>acitveHandler(acitve)}><span style={{color:props.theme==='dark' ? 'white' :'#807a7a'  }}>.</span></span>
          )
        })}

<button onClick={prevSlide} className="arrows arrow-left" style={style1}>&larr; </button>
       <button onClick={nextSlide} className="arrows arrow-right" style={style1}>&rarr;</button>
   
 </div>

        <Container className="mb-3 mb-md-0 mt-3">
            <div  className="btn-more mb-4 mb-md-0  mt-3" >
              <Link  to='/project'><button  style={style} className="h py-1 More " onClick={props.click}> <span className="faarrow" >&larr;</span> دیدن بیشتر</button></Link>
            </div>
        </Container>
      </div>
   </Container>

     
    </div>
  )
}
export default FaInstances