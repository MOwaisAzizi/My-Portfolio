import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './exprence.css'
import pic4 from './pic4.png'


const Exprence = (props) => {
   return (
      <div data-aos="fade-in" data-aos-delay="200"  >
         <Container className="exprence mt-lg-2 mt-0">
            <Row className="row">
               <Col lg={12} className="img pt-lg-5 pt-md-5 pt-4">
                  <div className="img" >
                     <img src={pic4} data-aos="fade-up"></img>
                  </div>
               </Col>

               <Col lg={12} className="text">
                  <div className="dtext">
                     <h3 data-aos="fade-up" className="ms-4"><b>What did i do ?</b></h3>
                     <ul className="exp-ul" data-aos="fade-up" >
                        <li data-aos="fade-up" data-aos-delay="50">I have one years exprence in web developement.</li>
                        <li data-aos="fade-up" data-aos-delay="100">Working as a apprentice in WASSA organization for 6 mounth.</li>
                        <li data-aos="fade-up" data-aos-delay="150">Building dozen of project in WASSA organization.</li>
                        <li data-aos="fade-up" data-aos-delay="250">Building some games by using HTML,CSS and JS.</li>
                        <li data-aos="fade-up" data-aos-delay="300">Beeing the memeber of IT community and csOfcs in Herat university for about 4 mounth.</li>
                        <li data-aos="fade-up" data-aos-delay="380">building more than 25 mini project by html, css,j s,react ,bootstrap in past year.</li>
                     </ul>
                  </div>

               </Col>

            </Row>
         </Container>
      </div>
   )
}
export default Exprence