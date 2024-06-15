import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const FaExprence = (props) => {
   return (
      <div data-aos="fade-in" data-aos-delay="200" style={{ direction: 'rtl' }}>
         <Container className="exprence mt-lg-2 mt-0">
            <Row className="row">
               <Col lg={12} className="img pt-lg-5 pt-md-5 pt-4">
                  <div className="img" >
                     <img src={pic4} data-aos="fade-up"></img>
                  </div>
               </Col>

               <Col lg={12} className="text">
                  <div className="dtext dftext">
                     <h3 data-aos="fade-up" className="me-5"><b>چیکار انجام دادم؟</b></h3>
                     <ul className="exp-ul" data-aos="fade-up">
                        <li data-aos="fade-up" data-aos-delay="50">داشتن تجربه یکساله در زمینه توسعه وب.</li>
                        <li data-aos="fade-up" data-aos-delay="100">کارآموزی در موسسه واسا برای شش ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="150">توسعه پروژه های متقاوت در موسسه واسا.</li>
                        <li data-aos="fade-up" data-aos-delay="200">ساخت چندین گیم توسط جاوااسکرپت.</li>
                        <li data-aos="fade-up" data-aos-delay="280">عضو کمیته آی تی و سی اس آف سی اس در دانشگاه هرات 4 ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="350">ساخت بیش از 25 پروژه مرتبط با وب در یکسال گذشته.</li>
                     </ul>
                  </div>

               </Col>

            </Row>
         </Container>
      </div>
   )
}
export default FaExprence