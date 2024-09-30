import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const FaExprence = () => {
   return (
      <div data-aos="fade-in" data-aos-delay="200" style={{ direction: 'rtl' }}>
         <Container className="exprence mt-lg-2 mt-0">
               <div lg={12} className="img pt-lg-5 pt-md-5 pt-4" >
                  <div className="img" data-aos="fade-left" data-aos-delay="50" data-aos-duration="3000">
                     <img src={pic4}></img>
                  </div>
               </div>

               {/* <div  className="text"> */}
                  <div className="dtext dftext faexprence">
                     <h3 data-aos="fade-up"><b>
                     <span>چیکار</span> <span>انجام</span> <span>دادم</span> <span>؟</span> 
                        </b></h3>
                     <ul className=" exp-ul-fa me-2 me-sm-0  ps-md-0" data-aos="fade-up">
                        <li data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">داشتن تجربه دو ساله در زمینه توسعه وب.</li>
                        <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">کارآموزی در موسسه واسا برای شش ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">توسعه پروژه های متقاوت در موسسه واسا.</li>
                        <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">ساخت چندین گیم جالب توسط جاوااسکرپت و ری اکت.</li>
                        <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">عضو فعال کمیته آی تی و سی اس آف سی اس در دانشگاه هرات برای 4 ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">ساخت بیش از 30 پروژه کوچک در یک نیم سال گذشته.</li>
                     </ul>
                  </div>

               {/* </div> */}

         </Container>
      </div>
   )
}
export default FaExprence