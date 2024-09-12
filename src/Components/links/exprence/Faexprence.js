import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const FaExprence = () => {
   return (
      <div data-aos="fade-in" data-aos-delay="200" style={{ direction: 'rtl' }}>
         <Container className="exprence mt-lg-2 mt-0">
            {/* <Row className="row"> */}
               <div lg={12} className="img pt-lg-5 pt-md-5 pt-4">
                  <div className="img" data-aos="fade-right" data-aos-delay="50">
                     <img src={pic4} data-aos="fade-right" data-aos-delay="100"></img>
                  </div>
               </div>

               <div lg={12} className="text">
                  <div className="dtext dftext faexprence">
                     <h3 data-aos="fade-up" className="me-4"><b>چیکار انجام دادم؟</b></h3>
                     <ul className="exp-ul" data-aos="fade-up">
                        <li data-aos="fade-up" data-aos-delay="50">داشتن تجربه یک و نیم ساله در زمینه توسعه وب.</li>
                        <li data-aos="fade-up" data-aos-delay="100">کارآموزی در موسسه واسا برای شش ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="150">توسعه پروژه های متقاوت در موسسه واسا.</li>
                        <li data-aos="fade-up" data-aos-delay="200">ساخت چندین گیم جالب توسط جاوااسکرپت و ری اکت.</li>
                        <li data-aos="fade-up" data-aos-delay="300">عضو فعال کمیته آی تی در دانشگاه هرات برای 4 ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="400">ساخت بیش از 30 پروژه کوچک در یک نیم سال گذشته.</li>
                     </ul>
                  </div>

               </div>

            {/* </Row> */}
         </Container>
      </div>
   )
}
export default FaExprence