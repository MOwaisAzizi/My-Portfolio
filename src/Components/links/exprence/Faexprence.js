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
                        <li data-aos="fade-up" data-aos-delay="200">ساخت چندین گیم جالب توسط جاوااسکرپت و ری اکت.</li>
                        <li data-aos="fade-up" data-aos-delay="300">عضو فعال کمیته آی تی در دانشگاه هرات برای 4 ماه.</li>
                        <li data-aos="fade-up" data-aos-delay="380">ساخت بیش از 30 پروژه کوچک در یکسال گذشته.</li>
                     </ul>
                  </div>

               </Col>

            </Row>
         </Container>
      </div>
   )
}
export default FaExprence